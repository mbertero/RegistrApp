import { Component, OnInit } from '@angular/core';
import { StateService } from '../state/state.service';
import { LoginService } from '../login/login.service';
import { Subscription } from 'rxjs';
import { AlertController } from '@ionic/angular';




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
    private loginService: LoginService, private alertController: AlertController ) { 
     
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


 
  async irCerrar() {
    const alert = await this.alertController.create({
      header: 'Cerrar sesión',
      message: '¿Estás seguro de que deseas cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            // Si el usuario elige cancelar, no haces nada o puedes realizar alguna acción específica
          },
        },
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Cierre de sesión completado');
            this.tituloSubscription.unsubscribe();
            window.location.reload();
          },
        },
      ],
    });
  
    await alert.present();
  }
  retroceder(){
    
  }
  ngOnDestroy() {
    this.tituloSubscription.unsubscribe();
    this.nombreSubscription .unsubscribe();
  }

}
