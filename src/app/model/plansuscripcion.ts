import { Codigomoneda } from "./codigomoneda";
import { Tienda } from "./tienda";

export class Plansuscripcion {
    idPlansuscripcion: number;
    estado:          string;
    serie:     string;
    opGravadas:     string;
    igv:     string;
    numeroOrden:     string;
    femision:     Date;
    festado:     Date;
    observacion:     string;
    codigoCorreo:     string;
    tienda: Tienda
    codigomoneda:Codigomoneda

}
