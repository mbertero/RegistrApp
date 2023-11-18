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

  constructor(private stateService: StateService, private loginService: LoginService, private router: Router) {
  
  }

  ngOnInit() {
    this.stateService.titulo$.subscribe(titulo => this.titulo = titulo);
    this.stateService.nombre$.subscribe(nombre => this.nombre = nombre);
    this.loginService.isLogged$.subscribe(isLogged => this.isLogged = isLogged);
  }


  irCerrar() {
  }

  retroceder(){
   
  }


}
