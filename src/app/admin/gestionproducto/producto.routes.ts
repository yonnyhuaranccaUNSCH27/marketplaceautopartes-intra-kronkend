import { Routes } from '@angular/router';

export const productoRoutes: Routes = [
  {
        path: 'lista-producto',
        loadComponent: () => import('./producto/producto-lista/producto-lista.component').then(c => c.ProductoListaComponent),
        title: 'Listado de productos'
      }

];
