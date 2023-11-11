import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header.component';
import { ProfesoresService } from '../state/profesores.service';
import { StateService } from '../state/state.service';



@NgModule({
  declarations: [HeaderComponent],

  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
