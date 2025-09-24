import { Proveedor } from './proveedor';
import { Usuario } from './usuario';
import { DetalleCompra } from './detalleCompra';

export class Compra {
  idCompra: number;
  total: number;
  igv: number;
  fechaEntrega: string;
  numGuia: string;
  placaVehiculo: string;
  fechaEmision: string;
  observacion: string;
  estadoGuia: string;
  origen: string;
  destino: string;
  proveedor: Proveedor;
  usuario: Usuario;
  detalleCompra: DetalleCompra[];
}
