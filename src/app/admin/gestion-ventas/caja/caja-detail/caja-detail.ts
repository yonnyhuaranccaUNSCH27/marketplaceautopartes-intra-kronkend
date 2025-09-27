import { Component, inject, signal, PLATFORM_ID } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ActivatedRoute } from '@angular/router';

import { CommonModule, isPlatformBrowser } from '@angular/common';
import { debounceTime, filter, switchMap } from 'rxjs';
import { DetalleCardComponent } from './detalle-card/detalle-card';
import { PagoCardComponent } from './pago-card/pago-card';
import { MaterialModule } from '../../../../material/material.module';
import { ProductoService } from '../../../../services/producto.service';
import { VentaService } from '../../../../services/venta.service';
import { Producto } from '../../../../model/producto';

export class CardItem {
  cantidad: number;
  nombre: string;
  precio1: number;
  precio2: number;
  precio3: number;
  subtotal: number;
}
@Component({
  selector: 'app-caja-detail-page',
  imports: [
    MaterialModule,
    MatSortModule,
    MatListModule,
    MatCheckboxModule,
    PagoCardComponent,
    DetalleCardComponent,
    CommonModule,
  ],
  templateUrl: './caja-detail.html',
  styles: `
    .category-tabs {
      margin-bottom: 16px;
    }
    mat-card-header {
      justify-content: center;
    }

    mat-card-content {
      text-align: center;
    }
  `,
})
export class CajaDetail {
  currentUrl = '';
  private platformId = inject(PLATFORM_ID);
  // searchProductos = signal<Producto.ResponseList[]>([]);
  searchControl = new FormControl('');

  totalWeight = 2.0;
  productoService = inject(ProductoService);
  // carritoService = inject(CarritoService);
  ventaService = inject(VentaService);
  route = inject(ActivatedRoute);

  // habitacionActual = signal<Producto.Response>(null);
  // primerItem = signal<CardItem>(null);
  // ventaItem = signal<Venta.Producto>(null);

  //Para manejar la lista de productos (habitaciones y platos)
  habitaciones = signal<Producto[]>([]);
  totalHabitaciones = signal(0);

  ngOnInit() {
    // Set currentUrl safely in ngOnInit
    if (isPlatformBrowser(this.platformId)) {
      this.currentUrl = window.location.pathname;
    }

    // this.ventaService.getVentaItemChange().subscribe((data) => {
    //   const newData = data ? { ...data } : null;
    //   this.ventaItem.set(newData);
    //   console.log('ventaItem', this.ventaItem());
      
    //   if (this.ventaItem() === null || this.ventaItem() === undefined) {
    //     this.route.params.subscribe((params) => {
    //         const id = Number(params['id']);
    //         if(isNaN(id)) return;
    //       this.productoService.findById(id).subscribe((data) => {
    //         this.habitacionActual.set(data);
    //         this.carritoService.iniciarCarrito({
    //           cantidad: 1,
    //           idServicio: data.tipoServicio?.idTipoServicio,
    //           nombre: data.nombre,
    //           descripcion: data.descripcion,
    //           precio1: data.pventa01,
    //           precio2: data.pventa02,
    //           precio3: data.pventa03,
    //           subtotal: data.pventa01,
    //           idProducto: data.idProducto,
    //         });
    //       });
    //     });
    //   }
    // });
    // this.productoService
    //   .findAllByIdServicioPageable(1, 0, 12)
    //   .subscribe((data: any) => {
    //     console.log(data);

    //     this.habitaciones.set(data.content);
    //     this.totalHabitaciones.set(data.totalElements);
    //   });

    // this.searchControl.valueChanges
    //   .pipe(
    //     filter((value) => typeof value === 'string' && value.length >= 2),
    //     debounceTime(300),
    //     switchMap((value) => this.productoService.buscarProductos(value))
    //   )
    //   .subscribe((data) => {
    //     this.searchProductos.set(data);
    //   });
  }

   showMore(e: { pageIndex: number; pageSize: number }) {
  //   this.productoService
  //     .findAllByIdServicioPageable(1, e.pageIndex, e.pageSize)
  //     .subscribe((data: any) => {
  //       this.habitaciones.set(data.content);
  //     });
 }
  seleccionarProducto(event: any) {
    // const productoSeleccionado = event.option.value as Producto.ResponseList;
    // this.carritoService.agregarCardItem({
    //   cantidad: 1,
    //   idServicio: productoSeleccionado.tipoServicio.idTipoServicio,
    //   descripcion: productoSeleccionado.descripcion,
    //   nombre: productoSeleccionado.nombre,
    //   precio1:
    //     productoSeleccionado.pventa01 == 0
    //       ? productoSeleccionado.pactivo
    //       : productoSeleccionado.pventa01,
    //   precio2: productoSeleccionado.pventa02,
    //   precio3: productoSeleccionado.pventa03,
    //   subtotal: productoSeleccionado.pventa01,
    //   idProducto: productoSeleccionado.idProducto,
    // });

    // this.searchControl.setValue('');
  }
  seleccionarCardProducto(productoSeleccionado: Producto) {
  //   this.carritoService.agregarCardItem({
  //     cantidad: 1,
  //     idServicio: productoSeleccionado.tipoServicio.idTipoServicio,
  //     descripcion: productoSeleccionado.descripcion,
  //     nombre: productoSeleccionado.nombre,
  //     precio1:
  //       productoSeleccionado.pventa01 == 0
  //         ? productoSeleccionado.pactivo
  //         : productoSeleccionado.pventa01,
  //     precio2: productoSeleccionado.pventa02,
  //     precio3: productoSeleccionado.pventa03,
  //     subtotal: productoSeleccionado.pventa01,
  //     idProducto: productoSeleccionado.idProducto,
  //   });
  // }
}
}
