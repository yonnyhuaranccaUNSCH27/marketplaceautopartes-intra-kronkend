import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Tipocombustible } from '../model/tipocombustible';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class TipocombustibleService extends GenericService<Tipocombustible>{
  private tipocombustibleChange: Subject<Tipocombustible[]> = new Subject<Tipocombustible[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/tipocombustible`);
  }

  setTipocombustibleChange(data: Tipocombustible[]) {
    this.tipocombustibleChange.next(data);
  }

  getTipocombustibleChange(){
    return this.tipocombustibleChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
