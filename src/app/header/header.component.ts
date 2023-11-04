import { Component, OnInit } from '@angular/core';
import { StateService } from '../state/state.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  titulo: string = '';
  nombre: string = '';
  isLogged: boolean = false;

  constructor(private stateService: StateService, private loginService: LoginService) {}

  ngOnInit() {
    this.stateService.getTitulo.subscribe((titulo) => {
      this.titulo = titulo;
    });

    this.stateService.getNombre.subscribe((nombre) => {
      this.nombre = nombre;
    });

    // Suscribe al estado de inicio de sesión
    this.loginService.isLogged$.subscribe((isLogged: boolean) => {
      this.isLogged = isLogged;
    });
  }
}