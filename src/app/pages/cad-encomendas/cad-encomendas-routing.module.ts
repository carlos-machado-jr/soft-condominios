import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadEncomendasComponent } from './cad-encomendas.component';

const routes: Routes = [{ path: '', component: CadEncomendasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadEncomendasRoutingModule { }
