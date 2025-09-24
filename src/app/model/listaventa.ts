import { Producto } from './producto';
import { Venta } from './venta';

export class Listaventa {
    idlistaVenta: number;
    item: string;
    cantidad: number;
    valorunitario: number;
    precioUnitario: number;
    igv: number;
    porcentajeIgv: number;
    descuento: number;
    valortotal: number;
    producto: Producto;
    venta: Venta;
}

