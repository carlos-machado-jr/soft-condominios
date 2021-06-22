import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialDesignModule } from '../../share/material-design/material-design.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountServiceService } from '../../share/utils/services/account-service.service';
import { StorageService } from '../../share/utils/services/storage.service';
import { AutentiticacaoService } from '../../share/utils/services/autentiticacao.service';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    HttpClientModule,
    MaterialDesignModule,
    ReactiveFormsModule
  ],
  providers:[StorageService, AccountServiceService, AutentiticacaoService]
})
export class LoginModule { }
