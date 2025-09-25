import { Tipodocumento } from "./tipodocumento";
import { Ubigeo } from "./ubigeo";

export class Tienda {
    idTienda: number;
    codigo:          string;
    numeroDocumento:     string;
    tipodocumento: Tipodocumento;
    razonSocial:string;
    nombreComercial:string;
    ubigeo:Ubigeo;
    nombreDireccion:string;
    telefono1:string;
    telefono2:string;
    correo1:string;
    correo2:string;
    fechaCreacion:Date;
    fechaModificacion:Date;
    urlLogo:string;
    urlPortada:string;
    usuarioSol:string;
    claveSol:string;
    fileCertificado:string;
    descripcion:string;
    mision:string;
    vision:string;
    estado:boolean;
    fechaSuscripcion:Date;
    numeroCuenta:string;
}