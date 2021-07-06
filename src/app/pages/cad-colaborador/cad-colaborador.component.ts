import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import {environment} from '../../../environments/environment';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}
import { ColaboradorService } from '../../share/utils/services/colaborador.service';
import { Router } from '@angular/router';
import { Colaborador } from '../../core/models/colaborador';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cad-colaborador',
  templateUrl: './cad-colaborador.component.html',
  styleUrls: ['./cad-colaborador.component.scss']
})
export class CadColaboradorComponent implements OnInit {
  hide = true;
  formulario: FormGroup;
  matcher = new MyErrorStateMatcher();
  senha: string;
  confirmarSenha: string;
  colaborador: Colaborador = new Colaborador();
  private loading: any;
  condominio: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private colaboradorService: ColaboradorService,
    private router: Router,
    private http: HttpClient,

  ) { }

  ngOnInit(): void {
    this.createFormulario();
    this.getCondominio();
  }

  getCondominio(){
    this.http.get(`${environment.baseUrl}/usuarios/auth`).subscribe(x => {
      this.condominio = x['condominio']
      console.log(this.condominio)
    })
  }

  async cadastrar() {
    this.senha = this.formulario.get('password').value;
    this.confirmarSenha = this.formulario.get('password_confirm').value;
    if(this.senha != this.confirmarSenha && this.senha != '' && this.senha != null){
      console.log("senha não é igual");
      return;
    }

    this.colaborador = {
      nome: this.formulario.get('name').value,
      sobrenome: this.formulario.get('sobrenome').value,
      cpf: this.formulario.get('cpf').value,
      email: this.formulario.get('email').value,
      funcao: this.formulario.get('funcao').value,
      condominio: null,
      linkFoto: null,
      status: null,
      senha: this.formulario.get('password').value,
      login: this.formulario.get('email').value
    };

      console.log(this.colaborador)
      this.colaboradorService.cadastrarFuncionario(this.colaborador)
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


  createFormulario() {
    this.formulario = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      password_confirm: ['', Validators.required],
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      sobrenome: ['', Validators.required],
      funcao: ['', Validators.required],
      condominio: ['', Validators.required]
    }
    )
  }
}
