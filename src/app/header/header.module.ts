import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header.component';
import { StateService } from '../state/state.service';


@NgModule({
  declarations: [HeaderComponent],

  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent
  ], providers: [
    StateService
  ]
})
export class HeaderModule { }
