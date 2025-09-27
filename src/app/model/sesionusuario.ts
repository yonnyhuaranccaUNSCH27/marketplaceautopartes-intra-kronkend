import { Usuario } from "./usuario";

export class Sesionusuario {
    idSesionusuario: number;
    tokensesion: string;
    finicio:     Date;
    fexpiracion:  Date;
    isactive:    string;
    usuario: Usuario
}
