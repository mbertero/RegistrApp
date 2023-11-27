import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {

 

  private BASE_URL = 'https://dummyjson.com'

  constructor(private http: HttpClient) { }

  getProfesores(){
    return this.http.get(`${this.BASE_URL}/users`)
  
  }
  getProfesorId(profesorId: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}/users/${profesorId}`);
  }
}
