import { Cargo } from "./cargo";
import { Niveleducacion } from "./niveleducacion";
import { Oficina } from "./oficina";
import { Persona } from "./persona";
import { Tienda } from "./tienda";
import { Tipoentidadespersonas } from "./tipoentidadespersonas";

export class Entidadespersonas {
    idEntidadespersonas:number;
    codigo:string;
    especialidad:string;
    fechacreada:Date;
    fechaingreso:Date;
    fechasalida:Date;
    tipocontrato:string;
    numconntrato:string;
    horariotrabajo:string;
    salario:number;
    urlfirma:string;
    metas:string;
    observaciones:string;
    bonificaciones:number;
    estado:number;
    disponibilidad:string;
    tarifahora:number;
    tienda: Tienda;
    cargo:Cargo;
    persona: Persona;
    tipoentidadespersonas:Tipoentidadespersonas;
    oficina:Oficina;
    niveleducacion:Niveleducacion;
}
