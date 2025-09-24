import { Ubigeo } from "./ubigeo";
import { Venta } from "./venta";

export class Envio {
    idEnvio:number;
    direccion:string;
    costo:number;
    estado:number;
    fechaenvio: Date;
    fechaentrega: Date;
    codigo: string;
    codigosecreto: string;
    venta: Venta;
    ubigeo: Ubigeo;

}

