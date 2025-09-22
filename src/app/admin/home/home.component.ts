import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  // Datos de ejemplo (pueden venir de un servicio API)
  cantidadEmpleados: number = 150;
  cantidadNominasProcesadas: number = 120;
  cantidadNominasPendientes: number = 30;
  totalPagos: number = 500000;

  // Datos para los tipos de empleados
  empleadosAdministrativos: number = 50;
  empleadosOperativos: number = 70;
  empleadosContratados: number = 30;

  // Cálculo de porcentajes para las barras de progreso
  get porcentajeAdministrativos(): number {
    return (this.empleadosAdministrativos / this.cantidadEmpleados) * 100;
  }

  get porcentajeOperativos(): number {
    return (this.empleadosOperativos / this.cantidadEmpleados) * 100;
  }

  get porcentajeContratados(): number {
    return (this.empleadosContratados / this.cantidadEmpleados) * 100;
  }
  

  ngOnInit(): void {
   

  }

}

  
