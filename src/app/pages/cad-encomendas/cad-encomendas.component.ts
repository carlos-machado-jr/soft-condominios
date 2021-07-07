import { environment } from './../../../environments/environment';
import { Encomenda } from './../../core/models/encomenda';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EncomendaService } from 'src/app/share/utils/services/encomenda.service';
import { ActivatedRoute } from '@angular/router';
import swet from 'sweetalert2';
@Component({
  selector: 'app-cad-encomendas',
  templateUrl: './cad-encomendas.component.html',
  styleUrls: ['./cad-encomendas.component.scss']
})
export class CadEncomendasComponent implements OnInit {
  formEncomendas: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private encomendaService: EncomendaService,
    private http: HttpClient,
  private activatedRoute: ActivatedRoute) { }

  formulario: FormGroup;
  encomenda: Encomenda = new Encomenda();
  user: any = [];
  nome: any = [];
  destinatario: string;
  idUser: any = [];
  id: any;
  idRoute: any;

  ngOnInit(): void {
    this.idRoute = this.activatedRoute.snapshot.params['id'];
    this.formEncomenda();
    this.getNome();
  }

  getNome() {
    this.http.get(`${environment.baseUrl}/moradores/searchByNome?condominio=`+this.idRoute+'&nome=').subscribe(x => {
      let dados = JSON.stringify(x);
      let usuario = dados;
      this.user = JSON.parse(usuario);
      console.log(this.user);
    })
  }

  async cadastrar() {
    this.encomenda = {
      descricao: this.formulario.get('descricao').value,
      destinatario: this.idUser
    }
    console.log(this.encomenda);

      this.encomendaService.cadastrarEncomenda(this.encomenda)
        .subscribe(complete => {
          console.log(complete.status);
          swet.fire('Parabéns!', 'Encomenda cadastrada com sucesso.', 'success');

        }, error => {
          console.log(error);
          let message: string
          let color: string
          switch (error.status) {
            case 500:
              message = 'Erro ao inserir';
              swet.fire('Ops', message, 'error')
              break;

            case 403:
              message = 'Dados Inválidos';
              swet.fire('Ops', message, 'error')
              break;

            case 404:
              message = 'Servidor não encontrado';
              swet.fire('Ops', message, 'error')
              break;

            case 408:
              message = 'Tempo de conexão esgotado';
              swet.fire('Ops', message, 'error')
              break;
          }

        })
    }
  


  formEncomenda(){
    this.formEncomendas = this.formBuilder.group({
      destinatario: ['', Validators.required],
      number_block: ['', Validators.required],
      number_apartament: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

}
