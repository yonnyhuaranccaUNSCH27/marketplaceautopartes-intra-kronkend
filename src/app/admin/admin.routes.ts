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
  {
    path: 'usuarios',
    loadChildren: () => import('./gestionusuario/usuarios.routes').then(r => r.usuariosRoutes),
  },
  {
    path: 'planes',
    loadChildren: () => import('./planes/planes.routes').then(r => r.planesRoutes),
  },

  // Redirección por defecto si la ruta no existe
  {
    path: '**',
    redirectTo: '',
  },



];
