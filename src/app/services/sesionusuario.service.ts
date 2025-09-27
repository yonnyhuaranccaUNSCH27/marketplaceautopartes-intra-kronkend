import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';

import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';
import { Sesionusuario } from '../model/sesionusuario';

@Injectable({
  providedIn: 'root'
})
export class SesionusuarioService extends GenericService<Sesionusuario>{
  private SesionusuarioChange: Subject<Sesionusuario[]> = new Subject<Sesionusuario[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/Sesionusuario`);
  }

  setSesionusuarioChange(data: Sesionusuario[]) {
    this.SesionusuarioChange.next(data);
  }

  getSesionusuarioChange(){
    return this.SesionusuarioChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
