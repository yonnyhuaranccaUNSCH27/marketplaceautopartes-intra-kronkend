import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';

import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';
import { Listabeneficios } from '../model/listabeneficio';


@Injectable({
  providedIn: 'root'
})
export class ListabeneficiosService extends GenericService<Listabeneficios>{
  private ListabeneficiosChange: Subject<Listabeneficios[]> = new Subject<Listabeneficios[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/Listabeneficios`);
  }

  setListabeneficiosChange(data: Listabeneficios[]) {
    this.ListabeneficiosChange.next(data);
  }

  getListabeneficiosChange(){
    return this.ListabeneficiosChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
