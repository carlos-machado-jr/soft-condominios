import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadDocumentosRoutingModule } from './cad-documentos-routing.module';
import { CadDocumentosComponent } from './cad-documentos.component';
import { MaterialDesignModule } from 'src/app/share/material-design/material-design.module';


@NgModule({
  declarations: [
    CadDocumentosComponent
  ],
  imports: [
    CommonModule,
    CadDocumentosRoutingModule,
    MaterialDesignModule
  ]
})
export class CadDocumentosModule { }
