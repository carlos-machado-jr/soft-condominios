import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadDocumentosRoutingModule } from './cad-documentos-routing.module';
import { CadDocumentosComponent } from './cad-documentos.component';
import { MaterialDesignModule } from 'src/app/share/material-design/material-design.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialFileInputModule } from 'ngx-material-file-input';


@NgModule({
  declarations: [
    CadDocumentosComponent
  ],
  imports: [
    CommonModule,
    CadDocumentosRoutingModule,
    MaterialDesignModule,
    MaterialFileInputModule,
    ReactiveFormsModule
  ]
})
export class CadDocumentosModule { }
