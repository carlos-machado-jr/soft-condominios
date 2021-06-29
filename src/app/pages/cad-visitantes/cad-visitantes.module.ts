import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadVisitantesRoutingModule } from './cad-visitantes-routing.module';
import { CadVisitantesComponent } from './cad-visitantes.component';
import { MaterialDesignModule } from 'src/app/share/material-design/material-design.module';
import { NgxMaskModule, IConfig } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    CadVisitantesComponent
  ],
  imports: [
    CommonModule,
    CadVisitantesRoutingModule,
    MaterialDesignModule,
    NgxMaskModule.forRoot(),
  ],
  exports: [
    MaterialDesignModule
  ]
})
export class CadVisitantesModule { }
