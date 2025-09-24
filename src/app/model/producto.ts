import { Categoria } from "./categoria";
import { Listaorigenproducto } from "./listaorigenproducto";
import { Listavehiculo } from "./listavehiculo";
import { Lugar } from "./lugar";
import { Marca } from "./marca";
import { Productocolor } from "./productocolor";
import { Tienda } from "./tienda";
import { Tipoafectacion } from "./tipoafectacion";
import { Tiposervicio } from "./tiposervicio";
import { Ubigeo } from "./ubigeo";
import { Unidad } from "./unidad";

export class Producto {
    idProducto:number;
    codigo:string;
    codigointernacional:string;
    codigobarra:string;
    nombre:string;
    nombregenerico:string;
    pactivo:number;
    igv:number;
    stockunitario:number;
    stockmin:number;
    preciocostocaja:number;
    precioventacaja:number;
    preciocupon:number;
    unidadcaja:number;
    stockcaja:number;
    preciocostounidad:number;
    pventa1:number;
    pventa2:number;
    pventa3:number;
    fechasalida:Date;
    fechacreada:Date;
    estado:number;
    observacion:string;
    totalvisitas:number;
    totalcompartidos:number;
    tiposervicio: Tiposervicio;
    categoria: Categoria;
    marca: Marca;
    unidad: Unidad;
    tipoafectacion: Tipoafectacion;
    lugar: Lugar;
    tienda: Tienda;
    ubigeo: Ubigeo;
    listaorigenproducto: Listaorigenproducto[];
    listavehiculo: Listavehiculo[];
    productocolor: Productocolor[];

}

