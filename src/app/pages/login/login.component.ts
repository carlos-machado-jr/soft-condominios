import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutentiticacaoService } from 'src/app/share/utils/autentiticacao.service';
import { User } from '../../core/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public usuario: User;

  constructor(
    private autenticacao: AutentiticacaoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  login(){

    
    this.autenticacao.exibirMenu.next(true);
    this.autenticacao.estaLogado.next(true);
    this.router.navigate(['home']);
  }

}
