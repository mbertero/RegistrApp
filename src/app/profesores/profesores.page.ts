import { Component, OnInit } from '@angular/core';
import { ProfesoresService } from '../state/profesores.service';

import { StateService } from '../state/state.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.page.html',
  styleUrls: ['./profesores.page.scss'],
})
export class ProfesoresPage implements OnInit {
  public profesores: any;

  constructor(private profesoresService: ProfesoresService,
     private stateService : StateService,
     private http : HttpClient ) {
      
     }


  ngOnInit() {
    console.log('Estoy en servicio profesores')
    this.stateService.setTitulo = 'Profesores'
    this.profesoresService.getProfesores().subscribe((data) => {
      console.log(data);
      this.profesores = data;
      
    });

  }

  detalle(profesor:any){
    console.log('profesor: ', profesor);
    // this.router.navigateByUrl('/detalle');
  }


}
