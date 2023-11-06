import { Component, OnInit } from '@angular/core';
import { StateService } from '../state/state.service';
import { LoginService } from '../login/login.service';
import { ProfesoresService } from '../state/profesores.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

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
    this.stateService.getTitulo.subscribe((titulo) => {
      this.titulo = titulo;
    });

    this.stateService.getNombre.subscribe((nombre) => {
      this.nombre = nombre;
    });

    this.loginService.isLogged$.subscribe((isLogged: boolean) => {
      this.isLogged = isLogged;
    });

    this.stateService.getTitulo.subscribe((titulo) => {
      if (titulo == 'Profesores' || titulo== 'Descripción' ) {
        this.esVisible = true;
      } else {
        this.esVisible = false;
      }
    });
  }
  irCerrar() {
    this.stateService.setTitulo = 'Login';
    this.router.navigate(['/login']);
  }

  retroceder(){
    // this.stateService.getTitulo.subscribe((titulo) => {
    //   if (titulo == 'Descripción' ) {
    //     this.stateService.setTitulo = 'Profesores'
    //   } else if (titulo == 'Profesores'){
    //     this.stateService.setTitulo = 'Homepage'
    //   }
    // });
  }


}
