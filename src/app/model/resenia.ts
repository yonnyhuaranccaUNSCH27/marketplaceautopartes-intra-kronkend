import { Entidadespersonas } from "./entidadespersonas";
import { Producto } from "./producto";


export class Resenia {
    idResenia:number;
    fechaResenia:Date;
    contenido:string;
    calificacion:number;
    asunto:string;
    producto:Producto;
    entidadespersonas:Entidadespersonas
    
}
