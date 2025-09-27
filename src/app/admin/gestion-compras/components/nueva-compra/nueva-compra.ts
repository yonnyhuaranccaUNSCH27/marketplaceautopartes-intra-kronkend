import { Component, OnInit, ViewChild, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { MaterialModule } from '../../../../material/material.module';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Proveedor } from '../../../../model/proveedor';
import { Producto } from '../../../../model/producto';
import { Compra } from '../../../../model/compra';
import { DetalleCompra } from '../../../../model/detalleCompra';

interface CompraItem {
  producto: Producto;
  cantidad: number;
  precioUnitario: number;
  subtotal: number;
}

@Component({
  selector: 'app-nueva-compra',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: 'nueva-compra.html',
  styleUrl: 'nueva-compra.css'
})
export class NuevaCompraComponent implements OnInit {
  compraForm: FormGroup;
  searchProductControl = new FormControl();
  numeroOrden = 'OC-2024-0001';
  fechaActual = new Date();

  selectedProveedor: Proveedor | null = null;
  compraItems = signal<CompraItem[]>([]);
  proveedores = signal<Proveedor[]>([]);
  filteredProducts = signal<Producto[]>([]);
  historialReciente = signal<any[]>([]);

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.compraForm = this.createForm();
  }

  ngOnInit() {
    this.loadProveedores();
    this.loadHistorial();
    this.setupProductSearch();
  }

  createForm(): FormGroup {
    return this.fb.group({
      proveedor: [null, Validators.required],
      fechaEntrega: [null, Validators.required],
      numGuia: [''],
      placaVehiculo: [''],
      origen: [''],
      destino: [''],
      observacion: ['']
    });
  }

  setupProductSearch() {
    this.searchProductControl.valueChanges.subscribe(value => {
      if (typeof value === 'string' && value.length >= 2) {
        this.searchProducts(value);
      }
    });
  }

  searchProducts(term: string) {
    // Implementar búsqueda de productos
    // En producción vendría del servicio
  }

  loadProveedores() {
    // Datos de ejemplo
    this.proveedores.set([
        {
          idProveedor: 1,
          razonSocial: 'Autopartes del Norte S.A.C.',
          ruc: '20123456789',
          telefono: '01-2345678',
          email: 'ventas@autoparte snorte.com'
        }
      ] as unknown as Proveedor[]);
  }

  loadHistorial() {
    // Cargar historial reciente
    this.historialReciente.set([
      { numeroOrden: 'OC-2024-0005', proveedor: { razonSocial: 'Toyota Parts' }, total: 2450.50 }
    ]);
  }

  onProveedorSelected(event: any) {
    this.selectedProveedor = event.value;
  }

  addProduct(product: Producto) {
    if (product) {
      const existingItem = this.compraItems().find(item => item.producto.idProducto === product.idProducto);

      if (existingItem) {
        existingItem.cantidad++;
        this.updateItemTotal(existingItem);
      } else {
        const newItem: CompraItem = {
          producto: product,
          cantidad: 1,
          precioUnitario: product.pactivo || 0,
          subtotal: product.pactivo || 0
        };
        this.compraItems.update(items => [...items, newItem]);
      }

      this.searchProductControl.setValue('');
      this.snackBar.open(`${product.nombre} agregado a la orden`, 'Cerrar', { duration: 2000 });
    }
  }

  removeProduct(index: number) {
    this.compraItems.update(items => items.filter((_, i) => i !== index));
  }

  updateItemTotal(item: CompraItem) {
    item.subtotal = item.cantidad * item.precioUnitario;
    this.compraItems.update(items => [...items]);
  }

  displayProduct(product: Producto): string {
    return product ? product.nombre : '';
  }

  subtotal() {
    return this.compraItems().reduce((sum, item) => sum + item.subtotal, 0);
  }

  igv() {
    return this.subtotal() * 0.18;
  }

  total() {
    return this.subtotal() + this.igv();
  }

  totalItems() {
    return this.compraItems().reduce((sum, item) => sum + item.cantidad, 0);
  }

  trackByProduct(index: number, item: CompraItem) {
    return item.producto.idProducto;
  }

  openProductCatalog() {
    // Abrir diálogo con catálogo completo
  }

  saveDraft() {
    // Guardar como borrador
    this.snackBar.open('Borrador guardado exitosamente', 'Cerrar', { duration: 2000 });
  }

  generateOrder() {
    if (this.compraForm.valid && this.compraItems().length > 0) {
      // Procesar orden de compra
      this.snackBar.open('Orden de compra generada exitosamente', 'Cerrar', { duration: 3000 });
    }
  }
}
