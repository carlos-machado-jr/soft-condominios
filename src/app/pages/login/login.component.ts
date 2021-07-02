import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../core/models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AutentiticacaoService } from '../../share/utils/services/autentiticacao.service';
import { AccountServiceService } from '../../share/utils/services/account-service.service';

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
    private account: AccountServiceService,
    private router: Router,
    private formBuilder: FormBuilder
    
  ) { }

  ngOnInit(): void {
    this.createForm();
  }
 

  async logar() {
      this.autenticacao.login(this.formLogin.value)
        .subscribe(complete => this.router.navigate(['home']), error => {
          let message: string;
          console.log(this.formLogin.value);
          switch (error.status) {
            case 401:
              message = 'Usuário ou Senha Incorretos';
              break;

            case 403:
              message = 'Usuário não autenticado';
              break;

            case 404:
              message = 'Pagina não encontrada';
              break;

            case 408:
              message = 'Tempo de conexão esgotado';
              break;
          }
          //message
          
        })

  }


  createForm() {
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  /*
 

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
*/
}
