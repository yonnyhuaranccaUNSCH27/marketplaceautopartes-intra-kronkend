import { Entidadespersonas } from './entidadespersonas';
import { Venta } from './venta';

export interface Movimientocliente {
    idMovimientocliente: number;
    fechaCreada: string;
    totalcompra: number;
    preferenciapaga: string;
    entidadespersonas: Entidadespersonas;
    venta: Venta;
}
