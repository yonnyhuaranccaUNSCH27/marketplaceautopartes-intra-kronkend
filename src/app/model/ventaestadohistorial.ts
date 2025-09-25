import { Estadoventa } from "./estadoventa";
import { Venta } from "./venta";


export class Ventaestadohistorial {
    idVentaestadohistorial:number;
    descripcion: string;
    venta: Venta;
    estadoventa:Estadoventa;
    fechaCambioEstado:Date;
    observaciones:string
}
