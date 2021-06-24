import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitantesRoutingModule } from './visitantes-routing.module';
import { VisitantesComponent } from './visitantes.component';
import { MaterialDesignModule } from '../../share/material-design/material-design.module';


@NgModule({
  declarations: [
    VisitantesComponent
  ],
  imports: [
    CommonModule,
    VisitantesRoutingModule,
    MaterialDesignModule
  ]
})
export class VisitantesModule { }
