import { Tienda } from "./tienda";

export class Cupon {
    idCupon: number;
    nombre: string;
    tipoDescuento: number;
    valorDescuento:number;
    fechaInicio:Date;
    fechaFin:Date;
    activo:boolean;
    fechaCreacion:Date;
    tienda:Tienda;
    codigo:string;
    descripcion:string;
}
