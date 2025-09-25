import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Tipoarchivo } from '../model/tipoarchivo';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class TipoarchivoService extends GenericService<Tipoarchivo>{
  private tipoarchivoChange: Subject<Tipoarchivo[]> = new Subject<Tipoarchivo[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/tipoarchivo`);
  }

  setTipoarchivoChange(data: Tipoarchivo[]) {
    this.tipoarchivoChange.next(data);
  }

  getTipoarchivoChange(){
    return this.tipoarchivoChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
