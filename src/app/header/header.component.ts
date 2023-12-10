import { Component, OnInit } from '@angular/core';
import { StateService } from '../state/state.service';
import { LoginService } from '../login/login.service';
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  {
  titulo: string = '';
  nombre: string = '';
  isLogged: boolean = false;
  esVisible: boolean = false;
  show : boolean = false;
  private tituloSubscription: Subscription = new Subscription;
  private nombreSubscription: Subscription = new Subscription;

  constructor(private stateService: StateService, 
    private loginService: LoginService ) { 
     
     }
   
  ngOnInit() {
    this.tituloSubscription = this.stateService.getTitulo.subscribe((titulo) => {
      this.titulo = titulo;
      console.log('Título actualizado en HeaderComponent:', titulo);
  
      if (titulo == 'Profesores' || titulo == 'Descripción' || titulo =='Asistencia') {
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
  
    this.nombreSubscription =  this.stateService.getNombre.subscribe((nombre) => {
      this.nombre = nombre;
      console.log('Header: '+ nombre);
    });
  
    this.loginService.isLogged$.subscribe((isLogged: boolean) => {
      this.isLogged = isLogged;
    });
  }


 
  irCerrar() {

        console.log('Cierre de sesión completado');
        this.tituloSubscription.unsubscribe();
        window.location.reload();
 

  }
  retroceder(){
    
  }
  ngOnDestroy() {
    this.tituloSubscription.unsubscribe();
    this.nombreSubscription .unsubscribe();
  }

}
