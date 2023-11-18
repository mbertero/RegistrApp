import { Component, OnInit } from '@angular/core';
import { ProfesoresService } from '../state/profesores.service';
import { Router } from '@angular/router';
import { StateService } from '../state/state.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public profesores: any;
  nombre: string = '';

  constructor( private router: Router,
    private stateService : StateService) {}

  ngOnInit() {
    this.stateService.setTitulo = 'Home'
    console.log('Entre a home correctamente')


    }
  irAAsistencia() {
    
    alert('Aun no se encuentra disponible. Vaya a botón de profesor :D');
  }


  irAProfesor() {    
    this.router.navigate(['profesores']);
  }
  irAInforme() {
    
    alert('Aun no se encuentra disponible. Vaya a botón de profesor :D');
  }
  irAAjustes() {
    
    alert('Aun no se encuentra disponible. Vaya a botón de profesor :D');
  }
  
 
}
