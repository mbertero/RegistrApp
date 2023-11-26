import { Component, OnInit } from '@angular/core';
import { StateService } from '../state/state.service';
import { LoginService } from '../login/login.service';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  titulo: string = '';
  nombre: string = '';
  isLogged: boolean = false;
  esVisible: boolean = false;
  show : boolean = false;

  constructor(private stateService: StateService, 
    private loginService: LoginService, private router: Router) {  }

  ngOnInit() {
    this.stateService.getTitulo.subscribe((titulo) => {
      this.titulo = titulo;
      console.log('Header' + titulo)
 
  
      if (titulo == 'Profesores' || titulo == 'Descripción') {
        this.esVisible = true;
      } else {
        this.esVisible = false;
      }
      
      if (titulo == 'Login' || titulo == 'Home') {
        this.show = true;
      } else {
        this.show = false;
      }
     
    });
  
    this.stateService.getNombre.subscribe((nombre) => {
      this.nombre = nombre;
      console.log('Header: '+ nombre);
    });
  
    this.loginService.isLogged$.subscribe((isLogged: boolean) => {
      this.isLogged = isLogged;
    });
  }


 
  irCerrar() {
    this.stateService.setNombre = 'invitado'
    this.stateService.setTitulo = 'Login'
    this.loginService.logout();
    this.router.navigate(['/login']);
  }



  retroceder(){
   
  }


}
