import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacaoGuard } from './core/guards/autenticacao.guard';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule), canActivate:[AutenticacaoGuard] },
  
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'cadastro', loadChildren: () => import('./pages/cadastro/cadastro.module').then(m => m.CadastroModule) },
  { path: 'forgot-password', loadChildren: () => import('./pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },
  { path: 'visitantes', loadChildren: () => import('./pages/visitantes/visitantes.module').then(m => m.VisitantesModule), canActivate:[AutenticacaoGuard] },
  { path: 'documentos', loadChildren: () => import('./pages/documentos/documentos.module').then(m => m.DocumentosModule), canActivate:[AutenticacaoGuard] },
  { path: 'ocorrencias', loadChildren: () => import('./pages/ocorrencias/ocorrencias.module').then(m => m.OcorrenciasModule), canActivate:[AutenticacaoGuard] },
  { path: 'cad-visitantes', loadChildren: () => import('./pages/cad-visitantes/cad-visitantes.module').then(m => m.CadVisitantesModule), canActivate:[AutenticacaoGuard] },
  { path: 'cad-documentos', loadChildren: () => import('./pages/cad-documentos/cad-documentos.module').then(m => m.CadDocumentosModule), canActivate:[AutenticacaoGuard] },
  { path: 'cad-ocorrencia', loadChildren: () => import('./pages/cad-ocorrencia/cad-ocorrencia.module').then(m => m.CadOcorrenciaModule), canActivate:[AutenticacaoGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
