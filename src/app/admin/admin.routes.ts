import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  //  Rutas de Gestión de Perfiles

  
  {
    path: 'compras',
    loadChildren: () => import('./gestion-compras/compras.routes').then(r => r.comprasRoutes),
  },
  {
    path: 'ventas',
    loadChildren: () => import('./gestion-ventas/ventas.routes').then(r => r.ventasRoutes),
  },
  {
    path: 'tienda',
    loadComponent: () => import('./gestion-tienda/crud-tienda/crud-tienda').then(m => m.CrudTiendaComponent),
  },
  // Redirección por defecto si la ruta no existe
  {
    path: '**',
    redirectTo: '',
  }
];