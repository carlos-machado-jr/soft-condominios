import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadVisitanteComponent } from './cad-visitante.component';

const routes: Routes = [{ path: '', component: CadVisitanteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadVisitanteRoutingModule { }
