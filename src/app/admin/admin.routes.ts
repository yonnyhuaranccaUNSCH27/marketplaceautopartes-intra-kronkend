import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  //  Rutas de Gestión de Perfiles
  
  // Redirección por defecto si la ruta no existe
  {
    path: '**',
    redirectTo: '',
  }
];