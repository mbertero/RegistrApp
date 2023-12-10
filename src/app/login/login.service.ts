import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class LoginService {

  private isLoggedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLogged$ = this.isLoggedSubject.asObservable();

  constructor(private http: HttpClient) { }

  getIsLogged(){
    return this.isLoggedSubject.asObservable();
  }

  setIsLogged(value: boolean){
    this.isLoggedSubject.next(value);
  }

  logout() {
    this.setIsLogged(false);
    
  }

  authenticate(username: string, password: string): Observable<boolean> {
   
    return of(true);
  }

}
