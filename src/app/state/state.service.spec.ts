import { TestBed } from '@angular/core/testing';

import { StateService } from './state.service';

describe('StateService', () => {
  let service: StateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set the name to "Jose"', () => {
    // Simula la acción de establecer el nombre en "Jose"
    service.setNombre = 'Jose';
  
      let nombreActual: string | undefined;
    service.getNombre.subscribe((nombre) => {
      nombreActual = nombre;
    });
  
  
    expect(nombreActual).toEqual('Jose');
  });
  it('should set the name to "invitado"', () => {
    // Simula la acción de establecer el nombre en "invitado"
    service.setNombre = 'invitado';
  
   
    let nombreActual: string | undefined;
    service.getNombre.subscribe((nombre) => {
      nombreActual = nombre;
    });
  
   
    expect(nombreActual).toEqual('invitado');
  });
  
});
