import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  opened: boolean = false;
  @ViewChild('sidenav') sidenav: MatSidenav;

  open(){
    this.sidenav.toggle().then(value => value == 'open' ? this.opened = true : this.opened = false );
    console.log(this.sidenav)
  }
}
