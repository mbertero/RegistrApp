import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { HeaderModule } from '../header/header.module';
import { FooterComponent } from '../footer/footer.component';
import { FooterModule } from '../footer/footer.module';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    HeaderModule,
    FooterModule
  ],
  declarations: [LoginPage]

})
export class LoginPageModule {}
