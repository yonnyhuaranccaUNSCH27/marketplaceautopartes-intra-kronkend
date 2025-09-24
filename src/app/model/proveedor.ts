import { Cuentabancaria } from './cuentabancaria';
import {Persona} from './persona';

export class Proveedor {
  idProveedor: number;
  tipoProveedor: number;
  cuentabancaria: Cuentabancaria;
  persona: Persona;
}
