import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadOcorrenciaRoutingModule } from './cad-ocorrencia-routing.module';
import { CadOcorrenciaComponent } from './cad-ocorrencia.component';
import { MaterialDesignModule } from 'src/app/share/material-design/material-design.module';


@NgModule({
  declarations: [
    CadOcorrenciaComponent
  ],
  imports: [
    CommonModule,
    CadOcorrenciaRoutingModule,
    MaterialDesignModule
  ]
})
export class CadOcorrenciaModule { }
