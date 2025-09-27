import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Listacolor } from '../model/listacolor';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ListacolorService extends GenericService<Listacolor>{
  private listacolorChange: Subject<Listacolor[]> = new Subject<Listacolor[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/listacolor`);
  }

  setListacolorChange(data: Listacolor[]) {
    this.listacolorChange.next(data);
  }

  getListacolorChange(){
    return this.listacolorChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
