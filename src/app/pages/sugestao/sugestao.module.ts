import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SugestaoRoutingModule } from './sugestao-routing.module';
import { SugestaoComponent } from './sugestao.component';
import { MaterialDesignModule } from '../../share/material-design/material-design.module';


@NgModule({
  declarations: [
    SugestaoComponent
  ],
  imports: [
    CommonModule,
    SugestaoRoutingModule,
    MaterialDesignModule
  ]
})
export class SugestaoModule { }
