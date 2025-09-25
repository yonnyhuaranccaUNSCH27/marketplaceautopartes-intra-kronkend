import { Usuario } from "./usuario";

export class Sesionusario {
    idSesionusuario: number;
    tokensesion: string;
    finicio:     Date;
    fexpiracion:  Date;
    isactive:    string;
    usuario: Usuario
}
