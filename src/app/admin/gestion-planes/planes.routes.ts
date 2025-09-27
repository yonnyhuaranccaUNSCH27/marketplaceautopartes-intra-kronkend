import { Routes } from '@angular/router';

export const planesRoutes: Routes = [
   {
        path: '',
        loadComponent: () => import('./vista-planes/lista-planes/lista-planes').then(c => c.ListaPlanes),
        title: 'Listado de Planes'
      },
      {
        path: '',
        loadComponent: () => import('./vista-planes/crud-planes/crud-planes').then(c => c.CrudPlanes),
        title: 'crud de Planes'
      },
];
