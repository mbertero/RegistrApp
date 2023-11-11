import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderModule } from '../header/header.module';
import { ProfesoresService } from '../state/profesores.service';
import {  HttpClientModule } from '@angular/common/http';
import { StateService } from '../state/state.service';
import { LoginService } from '../login/login.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeaderModule,
    HttpClientModule
  ],
  declarations: [HomePage],
  providers: [StateService]

})
export class HomePageModule {}
