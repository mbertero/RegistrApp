import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfesoresPageRoutingModule } from './profesores-routing.module';

import { ProfesoresPage } from './profesores.page';
import { HeaderModule } from '../header/header.module';
import { HttpClientModule } from '@angular/common/http';
import { ProfesoresService } from '../state/profesores.service';
import { StateService } from '../state/state.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    HttpClientModule,
    ProfesoresPageRoutingModule,
    
  ],
  declarations: [ProfesoresPage],
  providers: [ProfesoresService, StateService]
})
export class ProfesoresPageModule {}
