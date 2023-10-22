import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperaPassPageRoutingModule } from './recupera-pass-routing.module';

import { RecuperaPassPage } from './recupera-pass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperaPassPageRoutingModule
  ],
  declarations: [RecuperaPassPage]
})
export class RecuperaPassPageModule {}
