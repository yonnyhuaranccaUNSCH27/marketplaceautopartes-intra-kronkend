import { Codigomoneda } from './codigomoneda';
import { Formapago } from './formapago';
import { Listaventa } from './listaventa';
import { Tipocomprobante } from './tipocomprobante';
import { Tipoventa } from './tipoventa';
import { Tienda } from './tienda';
export class Venta {
    idVenta: number;
    serie: string;
    correlativo: string;
    opgravada: number;
    opinafecta: number;
    opexonerada: number;
    igv: number;
    pago: number;
    vuelto: number;
    total: number;
    fechaemision: string; // ISO string
    fechaestado: string; // ISO string
    fechacodigoerror: string; // ISO string
    fechamensajeserial: string; // ISO string
    observacion: string;
    estado: string;
    orderNumber: string;
    transactionId: string;
    estadoTransaccion: string;
    codigoAutorizacion: string;
    tienda: Tienda;
    tipocomprobante: Tipocomprobante;
    codigomoneda: Codigomoneda;
    Formapago: Formapago;
    tipoventa: Tipoventa;
    listaventas: Listaventa[];
}
