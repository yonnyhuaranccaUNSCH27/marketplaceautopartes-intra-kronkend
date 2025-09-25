import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Envio } from '../model/envio';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class EnvioService extends GenericService<Envio>{
  private envioChange: Subject<Envio[]> = new Subject<Envio[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/envio`);
  }

  setEnvioChange(data: Envio[]) {
    this.envioChange.next(data);
  }

  getEnvioChange(){
    return this.envioChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
