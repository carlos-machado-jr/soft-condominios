import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadVisitantesComponent } from './cad-visitantes.component';

const routes: Routes = [{ path: '', component: CadVisitantesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadVisitantesRoutingModule { }
