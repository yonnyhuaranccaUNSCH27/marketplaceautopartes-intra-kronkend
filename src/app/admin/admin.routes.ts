import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  //  Rutas de Gestión de Perfiles

  
  {
    path: 'caja',
    loadChildren: () => import('./caja/caja.routes').then(r => r.cajaRoutes),
  },
  {
    path: 'compras',
    loadChildren: () => import('./compras/compras.routes').then(r => r.comprasRoutes),
  },
  {
    path: 'ventas',
    loadChildren: () => import('./ventas/ventas.routes').then(r => r.ventasRoutes),
  },
  // Redirección por defecto si la ruta no existe
  {
    path: '**',
    redirectTo: '',
  }
];