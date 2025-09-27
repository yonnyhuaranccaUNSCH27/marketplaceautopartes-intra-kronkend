import { Categoria } from "./categoria";
import { Marca } from "./marca";
import { Tienda } from "./tienda";

export class Historialconsultas{
    idHistorialconsultas: number;
    descripcion:     string;
    marca:Marca;
    catgoria:Categoria;
    tienda:Tienda
}
