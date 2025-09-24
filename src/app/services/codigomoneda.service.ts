import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Codigomoneda } from '../model/codigomoneda';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class CodigomonedaService extends GenericService<Codigomoneda>{
  private codigomonedaChange: Subject<Codigomoneda[]> = new Subject<Codigomoneda[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/codigomoneda`);
  }

  setCodigomonedaChange(data: Codigomoneda[]) {
    this.codigomonedaChange.next(data);
  }

  getCodigomonedaChange(){
    return this.codigomonedaChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
