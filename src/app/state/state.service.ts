
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  //BehaviorSubject es un tipo de observable que nos permite almacenar un valor y emitirlo a todos los componentes que estén suscritos a él.
  titulo: BehaviorSubject<string> = new BehaviorSubject<string>('Login');
  nombre: BehaviorSubject<string> = new BehaviorSubject<string>('invitado');


  constructor() { }


  //GETTERS Y SETTERS
  get getTitulo(){
    return this.titulo.asObservable();
    
  }


  set setTitulo(titulo:string){
    this.titulo.next(titulo);
    console.log('Estoy en state titulo' + titulo)

  }
  get getNombre(){
    return this.nombre.asObservable();
  }


  set setNombre(nombre:string){
      this.nombre.next(nombre);
      console.log('Estoy en state nombre '+ nombre)

  }
  
}
