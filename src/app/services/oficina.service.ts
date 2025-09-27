import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';

import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';
import { Oficina } from '../model/oficina';



@Injectable({
  providedIn: 'root'
})
export class OficinaService extends GenericService<Oficina>{
  private OficinaChange: Subject<Oficina[]> = new Subject<Oficina[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/Oficina`);
  }

  setOficinaChange(data: Oficina[]) {
    this.OficinaChange.next(data);
  }

  getOficinaChange(){
    return this.OficinaChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
