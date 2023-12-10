import { Component, OnInit } from '@angular/core';

import {  Router } from '@angular/router';
import { StateService } from '../state/state.service';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  constructor( private router: Router,
    private stateService : StateService) {
   
    }

  ngOnInit() {
    console.log('Entre a home correctamente')
    this.stateService.setTitulo = 'Home'
  
    
   

    }
  irAAsistencia() {
    this.router.navigate(['asistencia']);
  }


  irAProfesor() {    
    this.router.navigate(['profesores']);
  }
  irAInforme() {
    
    alert('Aun no se encuentra disponible. Vaya a botón de asistencia o profesor');
  }
  irAAjustes() {
    
    alert('Aun no se encuentra disponible. Vaya a botón de asistencia o profesor');
  }
  
 
}
