import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadOcorrenciaComponent } from './cad-ocorrencia.component';

const routes: Routes = [{ path: '', component: CadOcorrenciaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadOcorrenciaRoutingModule { }
