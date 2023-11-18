import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../state/state.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public profesores: any;
  public nombre: string = '';

  constructor(
    private router: Router,
    private stateService : StateService
    ) {}

  ngOnInit() {
    this.stateService.setTitulo('Home');
    this.stateService.getNombre().subscribe(nombre => {
      this.nombre = nombre;
    });
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
