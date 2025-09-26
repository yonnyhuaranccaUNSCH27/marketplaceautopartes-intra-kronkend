import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';

import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';
import { Parametrostienda } from '../model/parametrostienda';



@Injectable({
  providedIn: 'root'
})
export class ParametrostiendaService extends GenericService<Parametrostienda>{
  private ParametrostiendaChange: Subject<Parametrostienda[]> = new Subject<Parametrostienda[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/Parametrostienda`);
  }

  setParametrostiendaChange(data: Parametrostienda[]) {
    this.ParametrostiendaChange.next(data);
  }

  getParametrostiendaChange(){
    return this.ParametrostiendaChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
