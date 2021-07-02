import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialDesignModule } from '../../share/material-design/material-design.module';
import { SwiperModule } from "swiper/angular";
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialDesignModule,
    SwiperModule,
  ]
})
export class HomeModule { }
