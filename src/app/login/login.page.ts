import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StateService } from '../state/state.service';
import { LoginService } from './login.service';

interface Usuario {
  nombre: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formIngresarUsuario: FormGroup; //Declarando formulario reactivo
  nombre:string = ''; //Declarando variable nombre

  usuario1: Usuario = {
    nombre: 'Jose',
    password: '1234'
  }


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private stateService: StateService,
    private loginService: LoginService
    ) {
    this.formIngresarUsuario = this.fb.group(
      {
        nombre: [""],
        password: [""]
      }
    )
   }

   login(){
     this.loginService.setIsLogged(true);
   }

  ngOnInit() {
  }

  ingresarUsuario() {
    const usuario = this.formIngresarUsuario.value;
  
    if (usuario.nombre === '' || usuario.password === '') {
      alert('Debes llenar todos los campos');
      return;
    }
  
    // Verifica si el usuario y la contraseña son correctos
    if (usuario.nombre === this.usuario1.nombre && usuario.password === this.usuario1.password) {
      // Usuario válido, inicia sesión
      this.loginService.setIsLogged(true);
      this.stateService.setNombre(usuario.nombre);
      
      this.router.navigate(['home']);
    } else {
      // Usuario no válido, muestra mensaje de error
      alert('Usuario o contraseña incorrecto, vuelve a intentarlo');
    }
  }
  

  irARecuperar() {
    this.stateService.setNombre('invitado')
    this.stateService.setTitulo('Recuperar contraseña')
    this.router.navigate(['recupera-pass']);
  }

  recuperarUsuario(){
  }
}
