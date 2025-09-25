import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Tipoafectacion } from '../model/tipoafectacion';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class TipoafectacionService extends GenericService<Tipoafectacion>{
  private tipoafectacionChange: Subject<Tipoafectacion[]> = new Subject<Tipoafectacion[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/tipoafectacion`);
  }

  setTipoafectacionChange(data: Tipoafectacion[]) {
    this.tipoafectacionChange.next(data);
  }

  getTipoafectacionChange(){
    return this.tipoafectacionChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
