import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadDocumentosComponent } from './cad-documentos.component';

const routes: Routes = [{ path: '', component: CadDocumentosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadDocumentosRoutingModule { }
