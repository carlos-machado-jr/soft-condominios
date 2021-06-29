import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncomendasComponent } from './encomendas.component';

const routes: Routes = [{ path: '', component: EncomendasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EncomendasRoutingModule { }
