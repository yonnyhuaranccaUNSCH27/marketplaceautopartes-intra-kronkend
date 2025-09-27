import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';

import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';
import { Historialconsultas } from '../model/historilaconsultas';


@Injectable({
  providedIn: 'root'
})
export class HistorialconsultasService extends GenericService<Historialconsultas>{
  private HistorialconsultasChange: Subject<Historialconsultas[]> = new Subject<Historialconsultas[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/Historialconsultas`);
  }

  setHistorialconsultasChange(data: Historialconsultas[]) {
    this.HistorialconsultasChange.next(data);
  }

  getHistorialconsultasChange(){
    return this.HistorialconsultasChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
