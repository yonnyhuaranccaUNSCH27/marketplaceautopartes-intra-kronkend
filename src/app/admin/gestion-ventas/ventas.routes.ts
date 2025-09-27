import { Routes } from '@angular/router';

export const ventasRoutes: Routes = [

      {
        path: 'lista',
        loadComponent: () => import('./ventas/lista-ventas/lista-ventas').then(c => c.ListaVentas),
        title: 'Listado de Ventas'
      },
      {
        path: 'caja',
        loadComponent: () => import('./caja/caja-detail/caja-detail').then(c => c.CajaDetail),
        title: 'Detalle de Caja'
      },
      {
        path: 'lista-pedidos',
        loadComponent: () => import('./pedidos/pedidos-lista/pedidos-lista.component').then(c => c.PedidosListaComponent),
        title: 'Listado de pedidos'
      },
    ]

