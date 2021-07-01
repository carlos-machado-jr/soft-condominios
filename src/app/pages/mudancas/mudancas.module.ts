import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MudancasRoutingModule } from './mudancas-routing.module';
import { MudancasComponent } from './mudancas.component';
import { MaterialDesignModule } from '../../share/material-design/material-design.module';


@NgModule({
  declarations: [
    MudancasComponent
  ],
  imports: [
    CommonModule,
    MudancasRoutingModule,
    MaterialDesignModule
  ]
})
export class MudancasModule { }
