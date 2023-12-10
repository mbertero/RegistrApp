import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';

import { PerfilPage } from './perfil.page';
import { HeaderModule } from '../header/header.module';
import {  HttpClientModule } from '@angular/common/http';
import { ProfesoresService } from '../state/profesores.service';
import { StateService } from '../state/state.service';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    PerfilPageRoutingModule,
    HttpClientModule
  ],
  declarations: [PerfilPage],
  providers: [  StateService,ProfesoresService]
})
export class PerfilPageModule {}
