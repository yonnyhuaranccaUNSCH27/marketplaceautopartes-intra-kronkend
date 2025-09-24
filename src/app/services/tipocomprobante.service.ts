import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Tipocomprobante } from '../model/tipocomprobante';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class TipocomprobanteService extends GenericService<Tipocomprobante>{
  private tipocomprobanteChange: Subject<Tipocomprobante[]> = new Subject<Tipocomprobante[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/tipocomprobante`);
  }

  setTipocomprobanteChange(data: Tipocomprobante[]) {
    this.tipocomprobanteChange.next(data);
  }

  getTipocomprobanteChange(){
    return this.tipocomprobanteChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
