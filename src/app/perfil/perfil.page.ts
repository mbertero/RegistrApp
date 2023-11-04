import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfesoresService } from '../state/profesores.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  public perfilId: any;
  public profesor: any;


  constructor(
    private activateRoute: ActivatedRoute,
    private profesoresService: ProfesoresService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.perfilId = this.activateRoute.snapshot.paramMap.get('id');
    this.profesoresService.getProfesorId(this.perfilId).subscribe((detalle) => {
      this.profesor = detalle;
      
    });
  }
}
