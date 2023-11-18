import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  //BehaviorSubject es un tipo de observable que nos permite almacenar un valor y emitirlo a todos los componentes que estén suscritos a él.
  titulo$: BehaviorSubject<string> = new BehaviorSubject<string>('Login');
  nombre$: BehaviorSubject<string> = new BehaviorSubject<string>('Invitado');

  constructor() { }


  //GETTERS Y SETTERS
  getTitulo(){
    return this.titulo$.asObservable();
  }

  getNombre(){
    return this.nombre$.asObservable();
  }

  setTitulo(titulo:string){
    this.titulo$.next(titulo);
  }

  setNombre(nombre:string){
      this.nombre$.next(nombre);
  }
}
