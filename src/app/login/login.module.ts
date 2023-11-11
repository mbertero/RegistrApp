import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { HeaderModule } from '../header/header.module';
import { ProfesoresService } from '../state/profesores.service';
import { StateService } from '../state/state.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    HeaderModule
  ],
  declarations: [LoginPage],
  providers: [ProfesoresService, StateService]
})
export class LoginPageModule {}
