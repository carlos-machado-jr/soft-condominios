import { Condominio } from './../../../core/models/condominio';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Menu } from 'src/app/core/models/menu';
import { User } from 'src/app/core/models/user';
import { AutentiticacaoService } from '../../utils/services/autentiticacao.service';
import { AccountServiceService } from '../../utils/services/account-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'sidenav-menu',
  exportAs:'sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss']
})
export class SidenavMenuComponent{
  @Input() public user: User = new User();
  @Input() public menu: Menu[] = []
  @ViewChild('sidenav') public sidenav: MatSidenav;
  
  public opened: boolean = false;
  public panelOpenState = false;
  public exibirMenu = false;
  dados: any = [];
  funcao: string;
  sindicoList: any = [];
  condominio: any = []
  constructor(
    private autenticacao: AutentiticacaoService,
    private account: AccountServiceService,
    private router: Router,
    private http: HttpClient
   ){}

  ngOnInit(){
    this.account.exibirMenu.subscribe(value => this.exibirMenu = value);
    this.getUser();
  }


  public open(){
    this.sidenav.toggle().then(value => value == 'open' ? this.opened = true : this.opened = false );
  }

  public sairDaConta(){
    this.account.exibirMenu.next(false);
    this.account.estaLogado.next(false);
    this.autenticacao.logout();
    this.router.navigate(['login']);

  }

  getUser() {
    this.http.get(`${environment.baseUrl}/usuarios/auth`).subscribe(x => {
      let dados = JSON.stringify(x);
      let usuario = dados;
      this.dados = JSON.parse(usuario);
      console.log(this.dados);
      if(this.dados.condominio[0].lenght > 0){
        console.log('existe');
      }else{
        console.log('não existe');
      }
      if(this.dados['funcao']){
        this.condominio = this.dados.condominio[0];
        this.funcao = this.dados['funcao'];
        console.log(this.funcao)
      } else{
        this.condominio = this.dados['condominio'];
      }
    })
  }
}
