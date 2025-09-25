import { Entidadespersonas } from './entidadespersonas';
import {Persona} from './persona';

export class Participante {
  idParticipante: number;
  entidadespersonas: Entidadespersonas|null;
  telefonosExterno: string;
  nombreExterno: string;
  correoExterno:string
}
