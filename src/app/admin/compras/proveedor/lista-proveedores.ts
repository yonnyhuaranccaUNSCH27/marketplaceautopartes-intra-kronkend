import { Component, inject, signal } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { MaterialModule } from '../../../material/material.module';
import { MatTableDataSource } from '@angular/material/table';
import { Proveedor } from '../../../model/proveedor';


@Component({
  selector: 'app-proveedor',
  imports: [MaterialModule],
  templateUrl: './lista-proveedores.html',
  styles: ``,
})
export class ListaProveedores {
  dialog = inject(MatDialog);
  // alert = inject(ConfirmationService);
  // proveedorService = inject(ProveedorService);
  displayedColumns: string[] = ['nombre', 'celular', 'direccion', 'acciones'];
  dataSource = signal(new MatTableDataSource<Proveedor>());
  // currentUrl = window.location.pathname;
  totalProveedores = signal(0);
  currentPage = signal(0);
  currentSize = signal(0);

  ngOnInit() {
    // this.loadHabitaciones(0, 10);
    // this.proveedorService.proveedoresCache.asObservable().subscribe((data) => {
    //   this.dataSource.set(new MatTableDataSource<Proveedor.Res>(data));
    // });
  }

  private loadHabitaciones(pageIndex: number, pageSize: number): void {
    // this.proveedorService
    //   .listPageable(pageIndex, pageSize)
    //   .subscribe((data: any) => {
    //     this.dataSource.set(
    //       new MatTableDataSource<Proveedor.Res>(data.content)
    //     );
    //     this.totalProveedores.set(data.totalElements);
    //   });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource().filter = filterValue.trim().toLowerCase();
  }

  showMore(e: { pageIndex: number; pageSize: number }) {
    this.loadHabitaciones(e.pageIndex, e.pageSize);
    this.currentPage.set(e.pageIndex);
    this.currentSize.set(e.pageSize);
  }

  openCreateDialog(): void {
    // this.dialog.open(ProveedorDialogComponent, {
    //   data: { size: this.currentSize(), proveedor: {} },
    // });
  }

  openEditDialog(item: Proveedor): void {
    // const empresaReq: Empresa = {
    //   correo: item.empresa.correo,
    //   direccion: item.empresa.direccion,
    //   nombreComercial: item.empresa.nombreComercial,
    //   numDoc: item.empresa.numDoc,
    //   telefono: item.empresa.telefono,
    //   idEmpresa: item.empresa.idEmpresa,
    // };
    // const itemReq: Proveedor.Req = {
    //   idProveedor: item.idProveedor,
    //   empresa: empresaReq,
    // };
    // console.log(itemReq);

    // this.dialog.open(ProveedorDialogComponent, {
    //   data: {
    //     page: this.currentPage(),
    //     size: this.currentSize(),
    //     proveedor: itemReq,
    //   },
    // });
  }
  openDeleteDialog(id: number, nombre: string): void {
    // this.alert.confirmAction(() => {
    //   this.proveedorService
    //     .deleteProveedor(this.currentPage(), this.currentSize(), id)
    //     .subscribe();
    // }, `¿Estás seguro de eliminar ${nombre}?`);
  }
}
