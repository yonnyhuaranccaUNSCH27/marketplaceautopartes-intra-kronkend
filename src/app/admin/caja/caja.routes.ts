import { Routes } from '@angular/router';

export const cajaRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./caja-detail/caja-detail').then(c => c.CajaDetail),
   
  }
];
