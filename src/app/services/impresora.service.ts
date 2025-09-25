import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Impresora } from '../model/impresora';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ImpresoraService extends GenericService<Impresora>{
  private impresoraChange: Subject<Impresora[]> = new Subject<Impresora[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/impresora`);
  }

  setImpresoraChange(data: Impresora[]) {
    this.impresoraChange.next(data);
  }

  getImpresoraChange(){
    return this.impresoraChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
