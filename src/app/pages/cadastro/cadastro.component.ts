import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}
import { SindicoService } from '../../share/utils/services/sindico.service';
import { Router } from '@angular/router';
import { Colaborador } from '../../core/models/colaborador';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  hide = true;
  formulario: FormGroup;
  matcher = new MyErrorStateMatcher();
  sindico: Colaborador = new Colaborador();
  private loading: any;
  senha: string;
  confirmarSenha: string;

  constructor(
    private formBuilder: FormBuilder,
    private sindicoService: SindicoService,
    private router: Router
    
  ) { }

  ngOnInit(): void {
    this.createFormulario();
  }

  async cadastrar() {
    let funcao: string = 'Sindico'
    this.senha = this.formulario.get('password').value;
    this.confirmarSenha = this.formulario.get('password_confirm').value;
    if(this.senha != this.confirmarSenha && this.senha != '' && this.senha != null){
      console.log("senha não é igual");
      return;
    }

    this.sindico = {
      nome: this.formulario.get('name').value,
      sobrenome: this.formulario.get('sobrenome').value,
      cpf: this.formulario.get('cpf').value,
      email: this.formulario.get('email').value,
      funcao: funcao,
      condominio: null,
      linkFoto: null,
      status: null,
      senha: this.formulario.get('password').value,
      login: this.formulario.get('email').value
    };

      console.log(this.sindico)
      this.sindicoService.cadastrarColaborador(this.sindico)
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

  createFormulario(){
    this.formulario = this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
      password_confirm: ['', Validators.required],
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      sobrenome: ['', Validators.required],
    }, { validator: this.checkPasswords })
  }

  
  checkPasswords(group: FormControl) {
    let pass = group.get("password").value;
    let confirmPass = group.get("password_confirm").value;

    return pass === confirmPass ? null : { notSame: true }
  }
}
