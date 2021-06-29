import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// imports angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialDesignModule } from './share/material-design/material-design.module';
import { SidenavMenuComponent } from './share/components/sidenav-menu/sidenav-menu.component';
import { AutenticacaoGuard } from './core/guards/autenticacao.guard';
import { HttpClientModule } from '@angular/common/http';
import { AutentiticacaoService } from './share/utils/services/autentiticacao.service';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    SidenavMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    MatDialogModule
  ],
  providers: [AutentiticacaoService, AutenticacaoGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
