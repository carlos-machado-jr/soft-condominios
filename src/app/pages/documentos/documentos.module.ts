import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentosRoutingModule } from './documentos-routing.module';
import { DocumentosComponent } from './documentos.component';
import { MaterialDesignModule } from 'src/app/share/material-design/material-design.module';


@NgModule({
  declarations: [
    DocumentosComponent
  ],
  imports: [
    CommonModule,
    DocumentosRoutingModule,
    MaterialDesignModule
  ]
})
export class DocumentosModule { }
