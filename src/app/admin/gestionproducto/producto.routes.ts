import { Routes } from '@angular/router';

export const productoRoutes: Routes = [
  {
    path: 'lista-producto',
    loadComponent: () => import('./producto/producto-lista/producto-lista.component').then(c => c.ProductoListaComponent),
    title: 'Listado de productos'
  },
  {
    path: 'lista-tarifario',
    loadComponent: () => import('./tarifario/tarifario-lista/tarifario-lista.component').then(c => c.TarifarioListaComponent),
    title: 'Listado de tarifarios'
  }

];
