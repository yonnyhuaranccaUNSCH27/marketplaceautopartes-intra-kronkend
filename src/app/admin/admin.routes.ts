import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  //  Rutas de Gestión de Perfiles


  //  Rutas de Gestión de Productos y Vehículos
  {
    path: 'producto',
    loadChildren: () => import('./gestionproducto/producto.routes').then(r => r.productoRoutes),
  },
  {
    path: 'vehiculo',
    loadChildren: () => import('./gestionvehiculo/vehiculo.routes').then(r => r.vehiculoRoutes),
  },
  // Redirección por defecto si la ruta no existe
  {
    path: '**',
    redirectTo: '',
  }
];
