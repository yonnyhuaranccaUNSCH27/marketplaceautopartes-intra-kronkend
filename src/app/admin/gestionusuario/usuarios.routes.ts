import { Routes } from '@angular/router';

export const usuariosRoutes: Routes = [
   {
        path: '',
        loadComponent: () => import('./vista-usuario/lista-usuarios/lista-usuarios').then(c => c.ListaUsuarios),
        title: 'Listado de Usuarios'
      },
      {
        path: '',
        loadComponent: () => import('./vista-usuario/crud-usuarios/crud-usuarios').then(c => c.CrudUsuarios),
        title: 'crud de Usuarios'
      },
];
