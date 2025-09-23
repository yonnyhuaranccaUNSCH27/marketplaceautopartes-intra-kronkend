import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Compra } from '../model/compra';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class CompraService extends GenericService<Compra>{
  private compraChange: Subject<Compra[]> = new Subject<Compra[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/compra`);
  }

  setCompraChange(data: Compra[]) {
    this.compraChange.next(data);
  }

  getCompraChange(){
    return this.compraChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
