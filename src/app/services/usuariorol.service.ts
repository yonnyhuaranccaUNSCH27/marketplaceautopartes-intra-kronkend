import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';

import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';
import { Usuariorol } from '../model/usuariorol';



@Injectable({
  providedIn: 'root'
})
export class UsuariorolService extends GenericService<Usuariorol>{
  private UsuariorolChange: Subject<Usuariorol[]> = new Subject<Usuariorol[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/Usuariorol`);
  }

  setUsuariorolChange(data: Usuariorol[]) {
    this.UsuariorolChange.next(data);
  }

  getUsuariorolChange(){
    return this.UsuariorolChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
