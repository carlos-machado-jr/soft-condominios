import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SugestaoComponent } from './sugestao.component';

const routes: Routes = [{ path: '', component: SugestaoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SugestaoRoutingModule { }
