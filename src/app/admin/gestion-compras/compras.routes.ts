import { Routes } from '@angular/router';

export const comprasRoutes: Routes = [
  {
        path: 'proveedores',
        loadComponent: () => import('./proveedor/lista-proveedores/lista-proveedores').then(c => c.ListaProveedores),
        title: 'Listado de Proveedores'
      }
   
];
