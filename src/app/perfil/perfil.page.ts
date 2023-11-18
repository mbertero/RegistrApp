import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfesoresService } from '../state/profesores.service';
import { StateService } from '../state/state.service';

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
    private stateService : StateService
  ) {}

  ngOnInit() {
    this.stateService.setTitulo('Descripción')
    this.perfilId = this.activateRoute.snapshot.paramMap.get('id');
    this.profesoresService.getProfesorId(this.perfilId).subscribe((detalle) => {
      this.profesor = detalle;

    });
  }
}
