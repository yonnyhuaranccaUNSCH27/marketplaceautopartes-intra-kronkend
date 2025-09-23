import { Producto } from "./producto";
import { Tipoarchivo } from "./tipoarchivo";

export class Archivo {
    idArchivo:number;
    descripcion:string;
    url:string;
    idgoogledrive:string;
    tipoarchivo: Tipoarchivo;
    producto: Producto;

}

