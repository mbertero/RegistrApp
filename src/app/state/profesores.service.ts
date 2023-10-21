import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {

  private BASE_URL = 'https://dummyjson.com'

  constructor(private http: HttpClient) { }

  getProfesores(){
    return this.http.get(`${this.BASE_URL}/users`)
  }
}
