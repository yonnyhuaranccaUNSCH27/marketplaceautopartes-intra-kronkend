import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Cuentabancaria } from '../model/cuentabancaria';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class CuentabancariaService extends GenericService<Cuentabancaria>{
  private cuentabancariaChange: Subject<Cuentabancaria[]> = new Subject<Cuentabancaria[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/cuentabancaria`);
  }

  setCuentabancariaChange(data: Cuentabancaria[]) {
    this.cuentabancariaChange.next(data);
  }

  getCuentabancariaChange(){
    return this.cuentabancariaChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
