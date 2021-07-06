import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadColaboradorRoutingModule } from './cad-colaborador-routing.module';
import { CadColaboradorComponent } from './cad-colaborador.component';
import { MaterialDesignModule } from '../../share/material-design/material-design.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    CadColaboradorComponent
  ],
  imports: [
    CommonModule,
    CadColaboradorRoutingModule,
    MaterialDesignModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule
  ]
})
export class CadColaboradorModule { }
