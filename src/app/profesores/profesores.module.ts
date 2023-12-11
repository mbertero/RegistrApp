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
import { FooterModule } from '../footer/footer.module';


@NgModule({
  
  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    HttpClientModule,
    FooterModule,
    ProfesoresPageRoutingModule,
    
  ],
  declarations: [ProfesoresPage],
  providers: [  StateService,ProfesoresService]
})
export class ProfesoresPageModule {}
