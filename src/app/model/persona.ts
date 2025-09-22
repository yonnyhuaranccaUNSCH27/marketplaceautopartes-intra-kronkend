
import { Tipodocumento } from "./tipodocumento";
import { Ubigeo } from "./ubigeo";

export class Persona {
  idPersona: number;
  numdocumento: string;
  pernombres: string;
  apepaterno: string;
  apematerna: string;
  pergenero: number;
  perestadocivil:number;
  perdireccion: string;
  pertelefono: string;
  percorreo: string;
  perfechanacimiento: Date;
  pervalidacorreo:number;
  perfechacrea:Date;
  urlfoto:string;
  nombrecomercial:string;
  urllinkedin: string;
  ubigeo: Ubigeo;
  tipodocumento: Tipodocumento;   
}