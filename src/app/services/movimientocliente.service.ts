import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Movimientocliente } from '../model/movimientocliente';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class MovimientoclienteService extends GenericService<Movimientocliente>{
  private movimientoclienteChange: Subject<Movimientocliente[]> = new Subject<Movimientocliente[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/movimientocliente`);
  }

  setMovimientoclienteChange(data: Movimientocliente[]) {
    this.movimientoclienteChange.next(data);
  }

  getMovimientoclienteChange(){
    return this.movimientoclienteChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
