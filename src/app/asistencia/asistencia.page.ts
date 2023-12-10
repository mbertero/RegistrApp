import { Component, OnDestroy, OnInit } from '@angular/core';
import { StateService } from '../state/state.service';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage  implements OnInit, OnDestroy{
  texto: any;
  private mySubscription: Subscription = new Subscription;

  constructor(private stateService: StateService) { 

  }

  ngOnInit() {
     this.stateService.setTitulo = 'Asistencia'
     this.mySubscription = this.stateService.getTitulo.subscribe((titulo) => {
      this.texto = titulo;
      console.log('Título actualizado en AsistenciaPage:', titulo);
    });
   
  }
  ngOnDestroy() {
    this.mySubscription.unsubscribe();
  }
}
