import { Component, OnInit} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MaterialModule } from '../../../../material/material.module';

@Component({
  selector: 'app-producto-lista',
  imports: [MaterialModule],
  templateUrl: './producto-lista.component.html',
  styleUrl: './producto-lista.component.scss'
})
export class ProductoListaComponent implements OnInit{
  productos = [
    { nombre: 'TOYOTA',modelo: 'COROLLA', categoria: 'Espejos', descripcion: 'Corolla 2013-2019', origen: 'Taiwan', imagen: 'assets/espejos.jpg',precio:'S/ 130' },
    { nombre: 'TOYOTA',modelo: 'TERCEL', categoria: 'Espejos', descripcion: 'Tercel 1995-1999', origen: 'Taiwan', imagen: 'assets/espejos2.jpg',precio:'S/ 55.10' },
    { nombre: 'SUZUKI',modelo: 'SWIFT', categoria: 'Espejos', descripcion: 'Swift 2017', origen: 'Taiwan', imagen: 'assets/espejos3.jpg',precio:'S/ 159.50' },
    { nombre: 'VOLKSWAGEN',modelo: 'GOL', categoria: 'Espejos', descripcion: 'Gol Voyage 2008-2012', origen: 'Taiwan', imagen: 'assets/espejos4.jpg',precio:'S/ 64.90' },
    { nombre: 'Smartphone Samsung', categoria: 'Tecnología', descripcion: 'Pantalla AMOLED, 128GB', imagen: 'assets/phone.jpg',precio:'S/ 810' },
    { nombre: 'Auriculares Bluetooth', categoria: 'Accesorios', descripcion: 'Sonido HD, cancelación de ruido', imagen: 'assets/headphones.jpg',precio:'S/ 350' },
    { nombre: 'Silla Gamer', categoria: 'Muebles', descripcion: 'Ergonómica, color negro/rojo', imagen: 'assets/chair.jpg',precio:'S/ 450' },
    { nombre: 'Monitor LG', categoria: 'Tecnología', descripcion: '27" Full HD', imagen: 'assets/monitor.jpg',precio:'S/ 600' },
    // ... más productos
  ];

  // Variables de control
  searchText: string = '';
  filteredProductos = [...this.productos]; // lista filtrada
  pageSize = 5;
  pagedProductos = this.productos.slice(0, this.pageSize);

  ngOnInit(): void {}

  // 📄 Paginación sobre productos filtrados
  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.pagedProductos = this.filteredProductos.slice(startIndex, endIndex);
  }

  agregarProducto() {
    // Aquí rediriges al formulario
    console.log("Redirigir a formulario de agregar producto");
  }



  // 🔍 Filtro
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.searchText = filterValue;

    this.filteredProductos = this.productos.filter(p =>
      p.nombre.toLowerCase().includes(filterValue) ||
      p.categoria.toLowerCase().includes(filterValue) ||
      p.descripcion.toLowerCase().includes(filterValue)
    );

    // Reiniciar paginador en la primera página
    this.pagedProductos = this.filteredProductos.slice(0, this.pageSize);
  }

  // ❌ Limpiar filtro
  clearFilter() {
    this.searchText = '';
    this.filteredProductos = [...this.productos];
    this.pagedProductos = this.filteredProductos.slice(0, this.pageSize);
  }
}
