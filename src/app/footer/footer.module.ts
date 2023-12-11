import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './footer.component';


@NgModule({


  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    FooterComponent
  ],
  declarations: [FooterComponent]
})
export class FooterModule { }
