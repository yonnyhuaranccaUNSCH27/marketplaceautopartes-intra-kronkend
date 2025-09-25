import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Listaorigenproducto } from '../model/listaorigenproducto';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ListaorigenproductoService extends GenericService<Listaorigenproducto>{
  private listaorigenproductoChange: Subject<Listaorigenproducto[]> = new Subject<Listaorigenproducto[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/listaorigenproducto`);
  }

  setListaorigenproductoChange(data: Listaorigenproducto[]) {
    this.listaorigenproductoChange.next(data);
  }

  getListaorigenproductoChange(){
    return this.listaorigenproductoChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
