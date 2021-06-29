import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadVisitanteRoutingModule } from './cad-visitante-routing.module';
import { CadVisitanteComponent } from './cad-visitante.component';
import { MaterialDesignModule } from '../../share/material-design/material-design.module';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    CadVisitanteComponent
  ],
  imports: [
    CommonModule,
    CadVisitanteRoutingModule,
    MaterialDesignModule,
    MatDialogModule
  ]
})
export class CadVisitanteModule { }
