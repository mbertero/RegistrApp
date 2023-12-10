import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CanActivateRouteGuard } from './guards/can-activate-route.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
     canActivate: [CanActivateRouteGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    data: { titulo: 'Login' }
  },
  {
    path: 'profesores',
    loadChildren: () => import('./profesores/profesores.module').then( m => m.ProfesoresPageModule),
     canActivate: [CanActivateRouteGuard],
     data: { titulo: 'Profesores' }
   
  },
  {
    path: 'recupera-pass',
    loadChildren: () => import('./recupera-pass/recupera-pass.module').then( m => m.RecuperaPassPageModule)
  },
  {
    path: 'perfil/:id',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [CanActivateRouteGuard]
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./asistencia/asistencia.module').then( m => m.AsistenciaPageModule),
    canActivate: [CanActivateRouteGuard],
    data: { titulo: 'Asistencia' }
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
