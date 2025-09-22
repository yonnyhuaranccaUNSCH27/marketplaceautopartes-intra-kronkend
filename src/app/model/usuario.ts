import { Entidadespersonas } from "./entidadespersonas";
import { Rol } from "./rol";
import { Usuariorol } from "./usuariorol";


export class Usuario {
    idUsuario:number;
    usernombres:string;
    username:string;
    password:string;
    isactive:number;
    fechacreado:Date;
    fechamodificado:Date;
    termino1:number;
    termino2:number;
    entidadespersonas: Entidadespersonas;
    usuariorol: Usuariorol[];
}
