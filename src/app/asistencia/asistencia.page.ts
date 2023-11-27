import { Component, OnInit } from '@angular/core';
import { StateService } from '../state/state.service';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {
texto: any;
  constructor(private stateService: StateService) { }

  ngOnInit() {
    this.stateService.setTitulo = 'Asistencia'
  }

}
