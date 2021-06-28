import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OcorrenciasRoutingModule } from './ocorrencias-routing.module';
import { OcorrenciasComponent } from './ocorrencias.component';
import { MaterialDesignModule } from '../../share/material-design/material-design.module';


@NgModule({
  declarations: [
    OcorrenciasComponent
  ],
  imports: [
    CommonModule,
    OcorrenciasRoutingModule, 
    MaterialDesignModule
  ]
})
export class OcorrenciasModule { }
