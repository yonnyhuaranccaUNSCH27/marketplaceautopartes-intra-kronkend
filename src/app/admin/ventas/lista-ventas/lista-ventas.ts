import { Component, ViewChild } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { MatTableDataSource} from '@angular/material/table';
import { MatSort} from '@angular/material/sort';
import { MatPaginator} from '@angular/material/paginator';
import { VentaService } from '../../../services/venta.service';
import { Venta } from '../../../model/venta';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-lista-ventas',
  imports: [MaterialModule,DatePipe],
  templateUrl: './lista-ventas.html',
  styleUrl: './lista-ventas.css'
})
export class ListaVentas {
  // currentUrl = window.location.pathname;
  displayedColumns: string[] = [
    'nro',
    'accion',
    'tipoCompra',
    'serie',
    'tipoDocumento',
    "nroDocumento",
    "fechaEmision",
    "total",
    "respuestaSunat",
    "estado",
  ];
  dataSource: MatTableDataSource<Venta>;
  totalVentas = 0;
  currentPage = 0;
  currentSize = 0;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private ventaService: VentaService) {
  }
  ngOnInit() {
    // this.ventaService.findAllByCorrelativoIsNotNull(0, 10).subscribe((data) => {
    //   this.dataSource = new MatTableDataSource(data['content']);
    //   this.totalVentas = data['totalElements'];
    //   setTimeout(() => {
    //     this.dataSource.paginator = this.paginator;
    //     this.dataSource.sort = this.sort;
    //   });
    // })

  }
  showMore(e: { pageIndex: number; pageSize: number }) {
    // this.ventaService.findAllByNotEstadoPageable('venta', e.pageIndex, e.pageSize).subscribe((data) => {
    //   this.dataSource = new MatTableDataSource(data['content']);
    //   this.totalVentas = data['totalElements'];
    // })
    // this.currentPage = e.pageIndex;
    // this.currentSize = e.pageSize;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  viewTicket(idVenta: number) {
      // this.ventaService.getGeneratePdfTicket(idVenta).subscribe((data) => {
      //   // Crear un Blob con el tipo MIME correcto para PDF
      //   const file = new Blob([data], { type: 'application/pdf' });
      //   const fileURL = URL.createObjectURL(file);
        
      //   // Abrir en nueva pestaña y forzar la visualización del PDF
      //   const pdfWindow = window.open();
      //   if (pdfWindow) {
      //     pdfWindow.location.href = fileURL;
      //     // Opcional: limpiar el objeto URL cuando ya no se necesite
      //     pdfWindow.onload = () => {
      //       URL.revokeObjectURL(fileURL);
      //     };
      //   } else {
      //     // Fallback en caso de que el popup esté bloqueado
      //     alert('El navegador ha bloqueado la apertura de la ventana. Por favor, permita las ventanas emergentes para este sitio.');
      //   }
    // });
  }
  
  viewA4(idVenta: number) {
    // this.ventaService.getGeneratePdfA4(idVenta).subscribe((data) => {
    //   // Crear un Blob con el tipo MIME correcto para PDF
    //   const file = new Blob([data], { type: 'application/pdf' });
    //   const fileURL = URL.createObjectURL(file);
      
    //   // Abrir en nueva pestaña y forzar la visualización del PDF
    //   const pdfWindow = window.open();
    //   if (pdfWindow) {
    //     pdfWindow.location.href = fileURL;
    //     // Opcional: limpiar el objeto URL cuando ya no se necesite
    //     pdfWindow.onload = () => {
    //       URL.revokeObjectURL(fileURL);
    //     };
    //   } else {
    //     // Fallback en caso de que el popup esté bloqueado
    //     alert('El navegador ha bloqueado la apertura de la ventana. Por favor, permita las ventanas emergentes para este sitio.');
    //   }
    // });
  }
}

