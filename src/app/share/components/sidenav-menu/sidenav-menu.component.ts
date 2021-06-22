import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Menu } from 'src/app/core/models/menu';
import { User } from 'src/app/core/models/user';
import { AutentiticacaoService } from '../../utils/services/autentiticacao.service';

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
  constructor(
    private autenticacao: AutentiticacaoService,
    private router: Router
   ){}

  ngOnInit(){
    this.autenticacao.exibirMenu.subscribe(value => this.exibirMenu = value);
  }


  public open(){
    this.sidenav.toggle().then(value => value == 'open' ? this.opened = true : this.opened = false );
  }

  public sairDaConta(){
    this.autenticacao.exibirMenu.next(false);
    this.autenticacao.estaLogado.next(false);
    this.router.navigate(['login']);

  }
}
