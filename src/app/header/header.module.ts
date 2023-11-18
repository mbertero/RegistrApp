import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header.component';
import { StateService } from '../state/state.service';
import { ProfesoresService } from '../state/profesores.service';

@NgModule({


  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [HeaderComponent]
})
export class HeaderModule { }
