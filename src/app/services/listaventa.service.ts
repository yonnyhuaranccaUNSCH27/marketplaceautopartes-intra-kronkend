import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Listaventa } from '../model/listaventa';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ListaventaService extends GenericService<Listaventa>{
  private listaventaChange: Subject<Listaventa[]> = new Subject<Listaventa[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/listaventa`);
  }

  setListaventaChange(data: Listaventa[]) {
    this.listaventaChange.next(data);
  }

  getListaventaChange(){
    return this.listaventaChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
