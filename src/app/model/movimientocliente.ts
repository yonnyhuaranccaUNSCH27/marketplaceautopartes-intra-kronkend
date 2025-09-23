import { Entidadespersonas } from './entidadespersonas';
import { Venta } from './venta';

export class Movimientocliente {
    idMovimientocliente: number;
    fechaCreada: string;
    totalcompra: number;
    preferenciapaga: string;
    entidadespersonas: Entidadespersonas;
    venta: Venta;
}

