import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../core/models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AutentiticacaoService } from '../../share/utils/services/autentiticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public usuario: User;
  formLogin: FormGroup;
  hide = true;

  constructor(
    private autenticacao: AutentiticacaoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formularioLogin();
  }
  login(){
    this.autenticacao.exibirMenu.next(true);
    this.autenticacao.estaLogado.next(true);
    this.router.navigate(['home']);
  }

  logar(){
    this.autenticacao.login(this.formLogin.value)
    .subscribe(
      sucess => {
        
        this.router.navigate(['/home'])
      },
      erro => ''
    );
  }

  formularioLogin(){
    this.formLogin = this.formBuilder.group({
      email_login: ['', Validators.required],
      password_login: ['', Validators.required],
    })
  }

}
