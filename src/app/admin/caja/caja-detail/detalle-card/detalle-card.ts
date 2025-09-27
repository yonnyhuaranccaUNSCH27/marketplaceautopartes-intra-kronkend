import { Component, inject, input } from '@angular/core';
import { MaterialModule } from '../../../../material/material.module';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { CardItem } from '../caja-detail';
export interface DateRange {
  start: FormControl<Date | null>;
  end: FormControl<Date | null>;
  dias: FormControl<number>;
}
@Component({
  selector: 'app-detalle-card',
  imports: [MaterialModule, CommonModule],
  templateUrl: './detalle-card.html',
  styles: ``,
})
export class DetalleCardComponent {
  // carritoService = inject(CarritoService);
  dialog = inject(MatDialog);
  // formattersService = inject(FormattersService);
  displayedColumns: string[] = ['cantidad', 'producto', 'vu', 'subtotal', 'ob'];
  carritoTable = new MatTableDataSource<CardItem>([]);
  precioForm: FormGroup;
  itemRanges = new Map<number, FormGroup>();
  itemCheckboxes = new Map<number, FormGroup>();

  private createRangeForm(): FormGroup {
    return new FormGroup({
      start: new FormControl<Date>(new Date()),
      end: new FormControl<Date>(new Date()),
      dias: new FormControl<number>(1),
      cantidad: new FormControl<number>(1),
    });
  }

  private createCheckboxForm(): FormGroup {
    return new FormGroup({
      checkbox1: new FormControl<boolean>(false),
      checkbox2: new FormControl<boolean>(false),
    });
  }

  // Propiedades para calcular el total
  subtotal = 0;
  vat = 0;

  ngOnInit() {
    // this.carritoService.cardItems$.subscribe((items) => {
    //   console.log(items);
      
    //   this.carritoTable.data = items;
    //   items.forEach((item, index) => {
    //     const itemId = item.idProducto || index;
    //     if (!this.itemRanges.has(itemId)) {
    //       const rangeForm = new FormGroup({
    //         start: new FormControl<Date>(
    //           item.fechaEntrada ? new Date(item.fechaEntrada) : new Date()
    //         ),
    //         end: new FormControl<Date>(
    //           item.fechaSalida ? new Date(item.fechaSalida) : new Date()
    //         ),
    //         dias: new FormControl<number>(item.cantidad),
    //         cantidad: new FormControl<number>(item.cantidad || 1),
    //       });

    //       this.itemRanges.set(itemId, rangeForm);

    //       // Create checkbox form for each item
    //       if (!this.itemCheckboxes.has(itemId)) {
    //         const checkboxForm = new FormGroup({
    //           checkbox1: new FormControl<boolean>(item.early === 1),
    //           checkbox2: new FormControl<boolean>(item.late === 1)
    //         });
    //         this.itemCheckboxes.set(itemId, checkboxForm);

    //         checkboxForm.valueChanges.subscribe((value) => {
    //           // Actualizar early y late según los checkboxes
    //           item.early = value.checkbox1 ? 1 : 0;
    //           item.late = value.checkbox2 ? 1 : 0;

    //           // Cálculo de la cantidad adicional como antes
    //           let additionalQuantity = 0;

    //           if (value.checkbox1 && value.checkbox2) {
    //             additionalQuantity = 1;
    //           } else if (value.checkbox1 || value.checkbox2) {
    //             additionalQuantity = 0.5;
    //           }

    //           const baseQuantity =
    //             this.itemRanges.get(itemId)?.get('dias')?.value || 1;
    //           const finalQuantity = baseQuantity + additionalQuantity;

    //           this.actualizarCantidad(item, finalQuantity);

    //           // Actualizar el CardItem con la nueva cantidad y valores early/late
    //           const itemIndex = this.carritoTable.data.indexOf(item);
    //           if (itemIndex !== -1) {
    //             this.carritoService.actualizarCardItem(itemIndex, item);
    //           }
    //         });
    //       }

    //       if (item.idServicio === 1) {
    //         rangeForm.valueChanges.subscribe((value) => {
    //           if (value.start && value.end) {
    //             const startDate = new Date(value.start);
    //             startDate.setHours(0, 0, 0, 0);

    //             const endDate = new Date(value.end);
    //             endDate.setHours(0, 0, 0, 0);

    //             const diffTime = Math.abs(
    //               endDate.getTime() - startDate.getTime()
    //             );
    //             const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    //             const finalDays = diffDays + 1;

    //             // Actualizar el formulario
    //             rangeForm.patchValue({ dias: finalDays }, { emitEvent: false });

    //             // Actualizar el CardItem con las fechas
    //             item.fechaEntrada =this.formattersService.toLocalDateTimeString(startDate) ;
    //             item.fechaSalida = this.formattersService.toLocalDateTimeString(endDate) ;

    //             // Actualizar la cantidad considerando los checkboxes
    //             const checkboxForm = this.itemCheckboxes.get(itemId);
    //             let additionalQuantity = 0;

    //             if (checkboxForm) {
    //               const { checkbox1, checkbox2 } = checkboxForm.value;

    //               // Asegurar que early y late estén actualizados aquí también
    //               item.early = checkbox1 ? 1 : 0;
    //               item.late = checkbox2 ? 1 : 0;

    //               if (checkbox1 && checkbox2) {
    //                 additionalQuantity = 1;
    //               } else if (checkbox1 || checkbox2) {
    //                 additionalQuantity = 0.5;
    //               }
    //             }

    //             this.actualizarCantidad(item, finalDays + additionalQuantity);

    //             // Actualizar el item en el servicio para persistir los cambios
    //             const itemIndex = this.carritoTable.data.indexOf(item);
    //             if (itemIndex !== -1) {
    //               this.carritoService.actualizarCardItem(itemIndex, item);
    //             }
    //           }
    //         });
    //       } else {
    //         rangeForm.get('cantidad')?.valueChanges.subscribe((value) => {
    //           if (value) {
    //             this.actualizarCantidad(item, value);
    //           }
    //         });
    //       }
    //     }
    //   });
    //   this.calcularTotales();
    // });

    // // Inicializar el formulario
    // this.precioForm = new FormGroup({
    //   precio: new FormControl(null),
    // });
  }

  // Método para calcular los totales
  calcularTotales() {
  //   const total = this.carritoTable.data.reduce(
  //     (sum, item) => sum + item.cantidad * (item.precio1 || 0),
  //     0
  //   );
  //   this.carritoService.actualizarTotal(total);
  //   this.vat = total * 0.18; // IGV del 18%
  //   this.subtotal = total - this.vat;
  // }

  // getRangeForm(item: CardItem): FormGroup {
  //   const itemId = item.idProducto || this.carritoTable.data.indexOf(item);
  //   return this.itemRanges.get(itemId) || this.createRangeForm();
  }

  // getCheckboxForm(item: CardItem): FormGroup {
  //   const itemId = item.idProducto || this.carritoTable.data.indexOf(item);
  //   return this.itemCheckboxes.get(itemId) || this.createCheckboxForm();
  // }

  // Método para actualizar la cantidad
  actualizarCantidad(item: CardItem, cantidad: number) {
    item.cantidad = cantidad;
    item.subtotal = item.cantidad * (item.precio1 || 0);
    this.calcularTotales();
  }

  // Método para cambiar el precio seleccionado
  cambiarPrecio(item: CardItem, precio: number) {
    item.subtotal = item.cantidad * precio;
    this.calcularTotales();
  }

  // Método para abrir el modal de agregar persona
  openAddPersonModal(item:CardItem): void {
    // // Pasar las personas existentes al abrir el modal (si existen)
    // const dialogRef = this.dialog.open(AddPersonModalComponent, {
    //   width: '600px',
    //   data: { people: item.alojados || [] }
    // });
  
    // dialogRef.afterClosed().subscribe((people) => {
    //   if (people) {
    //     // Guardar las personas en el CardItem seleccionado
    //     item.alojados = people;
        
    //     // Actualizar el item en el servicio para persistir los cambios
    //     const itemIndex = this.carritoTable.data.indexOf(item);
    //     if (itemIndex !== -1) {
    //       this.carritoService.actualizarCardItem(itemIndex, item);
    //     }
    //   }
    // });
  }
}
