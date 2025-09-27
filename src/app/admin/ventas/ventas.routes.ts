import { Routes } from '@angular/router';

export const ventasRoutes: Routes = [
   
      {
        path: '',
        loadComponent: () => import('./lista-ventas/lista-ventas').then(c => c.ListaVentas),
        title: 'Listado de Ventas'
      },
    ]

