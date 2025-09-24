import {Codigomoneda} from './codigomoneda';
import {Banco} from './banco';
import {Tienda} from './tienda';

export class Cuentabancaria {
  idCuentabancaria: number;
  numeroCuenta: string;
  tipoCuenta: string;
  banco: Banco;
  codigomoneda: Codigomoneda;
  tienda: Tienda;
}
