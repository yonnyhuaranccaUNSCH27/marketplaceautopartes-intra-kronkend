import { Compra } from './compra';

export class DetalleCompra {
    idDetalleCompra: number;
    cantidad: number;
    item: string;
    subtotal: number;
    compra: Compra;
    producto: Producto;
}
