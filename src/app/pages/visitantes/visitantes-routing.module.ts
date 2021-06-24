import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitantesComponent } from './visitantes.component';

const routes: Routes = [{ path: '', component: VisitantesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitantesRoutingModule { }
