import { Tienda } from "./tienda";

export class Parametrostienda {
    idParametrostienda: number;
    descripcion: string;
    claveparametro: string;
    valorparametro: string;
    stockminimo: number;
    fcreacion: Date;
    factualizacion: Date;
    tienda:Tienda;
}
