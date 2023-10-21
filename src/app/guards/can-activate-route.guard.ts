import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateRouteGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    private router: Router
  ){}

  canActivate(): boolean {
    let isLogged : boolean = false;
    this.loginService.isLogged$.subscribe((value: boolean) => {
      isLogged = value;
      if(!value){
        this.router.navigateByUrl('/login');
      }
    });
    return isLogged;
    }
}
