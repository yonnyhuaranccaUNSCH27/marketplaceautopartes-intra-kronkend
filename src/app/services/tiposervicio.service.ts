import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Tiposervicio } from '../model/tiposervicio';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class TiposervicioService extends GenericService<Tiposervicio>{
  private tiposervicioChange: Subject<Tiposervicio[]> = new Subject<Tiposervicio[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/tiposervicio`);
  }

  setTiposervicioChange(data: Tiposervicio[]) {
    this.tiposervicioChange.next(data);
  }

  getTiposervicioChange(){
    return this.tiposervicioChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
