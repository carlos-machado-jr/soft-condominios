import { Component, Input, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Menu } from './core/models/menu';
import { User } from './core/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public user: User = new User();
  public menu: Menu[] = [
    {
    'descricao': 'Síndico',
    'icon': 'person',
    'menuItem': [{'descricao': 'Pagamentos', 'link': ''}]
    },
    {
      'descricao': 'Porteiro',
      'icon': 'person',
      'menuItem': [{'descricao': 'Pagamentos', 'link': ''}]
    },
    {
      'descricao': 'Zelador',
      'icon': 'person',
      'menuItem': [{'descricao': 'Pagamentos', 'link': ''}]
    },
    


]
 
 
}
