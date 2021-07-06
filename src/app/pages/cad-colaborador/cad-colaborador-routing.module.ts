import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadColaboradorComponent } from './cad-colaborador.component';

const routes: Routes = [{ path: '', component: CadColaboradorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadColaboradorRoutingModule { }
