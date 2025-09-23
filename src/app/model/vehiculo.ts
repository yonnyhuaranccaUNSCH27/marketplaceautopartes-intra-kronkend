import { Carroceria } from "./carroceria";
import { Clasevehiculo } from "./clasevehiculo";
import { Listacolor } from "./listacolor";
import { Listatipocombustible } from "./listatipocombustible";
import { Marca } from "./marca";
import { Modelo } from "./modelo";

export class Vehiculo {
    idVehiculo:number;
    numeroplaca:string;
    fechainscripcion:Date;
    anofabricacion:string;
    motor:string;
    chasis:string;
    placaantigua:string;
    asientos:number;
    ejes:string;
    ruedas:string;
    pesoneto:string;
    cargautil:string;
    largo:string;
    ancho:string;
    alto:string;
    antiguedad:string;
    estado:number;
    clasevehiculo: Clasevehiculo;
    carroceria: Carroceria;
    marca: Marca;
    modelo: Modelo;

    listacombustible: Listatipocombustible[];
    listacolor: Listacolor[];


}

