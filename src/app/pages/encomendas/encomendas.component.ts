import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { EncomendaService } from '../../share/utils/services/encomenda.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-encomendas',
  templateUrl: './encomendas.component.html',
  styleUrls: ['./encomendas.component.scss']
})
export class EncomendasComponent extends MatPaginatorIntl implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private encomendaService: EncomendaService) {

    super();
    this.translatePaginator();
    this.dataSource = new MatTableDataSource();
  }
  id: any;
  dados: any = [];
  condominio: any = [];
  funcao: string
  encomenda: any = []
  morador: any = []
  encomendaSub: Observable<any>;
  idCondominio: any;
  filtro: any;
  encomendaAtualizada = {};
  dataSource: MatTableDataSource<any>;

  displayedColumns: string[] = [
    'destinatario',
    'bloco',
    'apartamento',
    'dataCriacao',
    'dataEntrega',
    'descricao',
    'status',
    'acoes'
  ];

  alterar(id, descricao, destinatario) {
    this.encomendaAtualizada = {
      destinatario: destinatario,
      descricao: descricao,
      status: 'true'
    }
    return this.encomendaService.atualizarEncomenda(id, this.encomendaAtualizada, this.idCondominio)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getUser();
    this.dataSource.paginator = this.paginator;
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  getDataSource() {
    this.encomendaSub.subscribe((data: any[]) => this.dataSource.data = data);
    this.dataSource.paginator = this.paginator;
  }

  private translatePaginator() {
    // paginator tradução
    this.itemsPerPageLabel = 'Itens por pagina';
    this.getRangeLabel = function (page, pageSize, length) {
      if (length === 0 || pageSize === 0) {
        return '0 de ' + length;
      }
      length = Math.max(length, 0);
      const startIndex = page * pageSize;
      const endIndex = startIndex < length ?
        Math.min(startIndex + pageSize, length) :
        startIndex + pageSize;
      return startIndex + 1 + ' - ' + endIndex + ' de ' + length;
    };
  }

  getUser() {
    this.http.get(`${environment.baseUrl}/usuarios/auth`).subscribe(x => {
      let dados = JSON.stringify(x);
      let usuario = dados;
      this.dados = JSON.parse(usuario);
      console.log(this.dados);
      this.funcao = this.dados.funcao;
      console.log(this.dados.funcao)

      if (this.funcao === 'Porteiro' || this.funcao == 'Zelador') {

        this.http.get(`${environment.baseUrl}/encomendas/search?condominio=` + this.id + '&status=false').subscribe(
          (data: any) => {
            this.dataSource.data = data['content']
            console.log(this.dataSource.data)
          }
        )

      } else {
        this.http.get(`${environment.baseUrl}/encomendas/moradores?condominio=` + this.id + '&status=false').subscribe(
          (data: any) => {
            this.dataSource.data = data['content']
            console.log(this.dataSource.data)
          }
        )
      }
      if (this.dados['funcao']) {
        this.condominio = this.dados.condominio[0];
        this.idCondominio = this.condominio['id'];
        console.log(this.idCondominio);
      } else {
        this.condominio = this.dados['condominio'];
        this.idCondominio = this.condominio['id'];
      }
    })
  }
}