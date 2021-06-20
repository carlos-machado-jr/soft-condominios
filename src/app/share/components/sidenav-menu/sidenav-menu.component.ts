import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Menu } from 'src/app/core/models/menu';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'sidenav-menu',
  exportAs:'sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss']
})
export class SidenavMenuComponent {
  @Input() public user: User = new User();
  @Input() public menu: Menu[] = []
  
  public opened: boolean = false;
  @ViewChild('sidenav') sidenav: MatSidenav;
  panelOpenState = false;

  open(){
    this.sidenav.toggle().then(value => value == 'open' ? this.opened = true : this.opened = false );
    console.log(this.sidenav)
  }
}
