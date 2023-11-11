import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { HeaderModule } from '../header/header.module';
import { ProfesoresService } from '../state/profesores.service';
import { StateService } from '../state/state.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    HeaderModule,
    HttpClientModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
