import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsistenciaPageRoutingModule } from './asistencia-routing.module';

import { AsistenciaPage } from './asistencia.page';
import { QRCodeModule } from 'angularx-qrcode';
import { HeaderModule } from '../header/header.module';
import { StateService } from '../state/state.service';

@NgModule({
  imports: [QRCodeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AsistenciaPageRoutingModule,
    HeaderModule
  ],
  declarations: [AsistenciaPage],
  providers: [StateService]
})
export class AsistenciaPageModule {}
