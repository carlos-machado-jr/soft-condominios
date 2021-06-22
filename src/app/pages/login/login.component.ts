import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutentiticacaoService } from 'src/app/share/utils/autentiticacao.service';
import { User } from '../../core/models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  logar(){}

  formularioLogin(){
    this.formLogin = this.formBuilder.group({
      email_login: ['', Validators.required, Validators.email],
      password_login: ['', Validators.required],
    })
  }

}
