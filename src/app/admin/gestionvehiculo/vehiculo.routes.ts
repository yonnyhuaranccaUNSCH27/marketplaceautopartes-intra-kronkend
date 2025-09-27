import { Routes } from '@angular/router';

export const vehiculoRoutes: Routes = [
  {
        path: 'lista-vehiculo',
        loadComponent: () => import('./vehiculo/vehiculo-lista/vehiculo-lista.component').then(c => c.VehiculoListaComponent),
        title: 'Listado de vehiculos'
      }

];
