import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncomendasRoutingModule } from './encomendas-routing.module';
import { EncomendasComponent } from './encomendas.component';
import { MaterialDesignModule } from '../../share/material-design/material-design.module';


@NgModule({
  declarations: [
    EncomendasComponent
  ],
  imports: [
    CommonModule,
    EncomendasRoutingModule,
    MaterialDesignModule
  ]
})
export class EncomendasModule { }
