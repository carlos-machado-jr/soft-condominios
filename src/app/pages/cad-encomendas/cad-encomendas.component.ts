import { environment } from './../../../environments/environment';
import { Encomenda } from './../../core/models/encomenda';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EncomendaService } from 'src/app/share/utils/services/encomenda.service';
@Component({
  selector: 'app-cad-encomendas',
  templateUrl: './cad-encomendas.component.html',
  styleUrls: ['./cad-encomendas.component.scss']
})
export class CadEncomendasComponent implements OnInit {
  formEncomendas: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private encomendaService: EncomendaService,
    private http: HttpClient) { }

  formulario: FormGroup;
  encomenda: Encomenda = new Encomenda();
  user: any = [];
  nome: any = [];
  destinatario: string;
  idUser: any = []

  ngOnInit(): void {
    this.formEncomenda();
    this.getNome();
  }

  getNome() {
    this.http.get(`${environment.baseUrl}/moradores/searchByNome?nome=`).subscribe(x => {
      let dados = JSON.stringify(x);
      let usuario = dados;
      this.user = JSON.parse(usuario);
      console.log(this.user);
    })
  }

  filtrarNome(evt) {
    const procurarNome = evt.srcElement.value;
    this.nome = this.user.filter(x => {
      if (x => x['nome'] + ' ' + x['sobrenome'] == this.destinatario) {
        return ((x['nome'] + ' ' + x['sobrenome']).toLocaleLowerCase().indexOf(procurarNome.toLowerCase()) > -1);
      }
    });

    let dados = JSON.stringify(this.nome);
    let usuario = dados;
    let id = JSON.parse(usuario);
    this.idUser = id[0].id
    console.log(this.idUser);
  }

  async cadastrar() {
    this.encomenda = {
      descricao: this.formulario.get('description').value,
      destinatario: this.idUser
    }
    console.log(this.encomenda);

      this.encomendaService.cadastrarEncomenda(this.encomenda)
        .subscribe(complete => {
          console.log(complete.status);

        }, error => {
          console.log(error);
          let message: string
          let color: string
          switch (error.status) {
            case 500:
              message = 'Erro ao inserir';
              color = 'danger';
              break;

            case 403:
              message = 'Dados Inválidos';
              color = 'danger';
              break;

            case 404:
              message = 'Servidor não encontrado';
              color = 'danger';
              break;

            case 408:
              message = 'Tempo de conexão esgotado';
              color = 'danger';
              break;
          }
        
        console.log(message);
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
