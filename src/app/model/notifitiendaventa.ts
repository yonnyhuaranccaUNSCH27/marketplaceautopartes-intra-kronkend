
import { Canalrecepcion } from "./canalrecepcion";

export class Notifitiendaventa {
    idNotifitiendaventa:number;
    descripcion:string;
    asunto:string;
    mensaje:string;
    fechaenvio: Date;
    estado: number;
    //ventaestadohistorial: Ventaestadohistorial;
    canalrecepcion: Canalrecepcion;

}

