import { Component, OnInit } from '@angular/core';
import { ProfesoresService } from '../state/profesores.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public profesores: any;

  constructor(private profesoresService: ProfesoresService, private router: Router) {}

  ngOnInit() {
    this.profesoresService.getProfesores().subscribe((data) => {
      // Persistencia
      localStorage.setItem('profesores', JSON.stringify(data));
      console.log(data);
      this.profesores = data;
    });

  }

  detalle(profesor:any){
    console.log('profesor: ', profesor);
    this.router.navigateByUrl('/detalle');
  }

}
