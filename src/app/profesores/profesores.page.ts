import { Component, OnInit } from '@angular/core';
import { ProfesoresService } from '../state/profesores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.page.html',
  styleUrls: ['./profesores.page.scss'],
})
export class ProfesoresPage implements OnInit {
  public profesores: any;

  constructor(private profesoresService: ProfesoresService, private router: Router) {}


  ngOnInit() {
    this.profesoresService.getProfesores().subscribe((data) => {
      console.log(data);
      this.profesores = data;
    });
  }

  detalle(profesor:any){
    console.log('profesor: ', profesor);
    this.router.navigateByUrl('/detalle');
  }


}
