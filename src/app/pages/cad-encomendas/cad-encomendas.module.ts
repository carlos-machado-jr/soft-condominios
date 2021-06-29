import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadEncomendasRoutingModule } from './cad-encomendas-routing.module';
import { CadEncomendasComponent } from './cad-encomendas.component';
import { MaterialDesignModule } from '../../share/material-design/material-design.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CadEncomendasComponent
  ],
  imports: [
    CommonModule,
    CadEncomendasRoutingModule,
    MaterialDesignModule,
    ReactiveFormsModule
  ]
})
export class CadEncomendasModule { }
