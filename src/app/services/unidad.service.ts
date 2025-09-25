import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Unidad } from '../model/unidad';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UnidadService extends GenericService<Unidad>{
  private unidadChange: Subject<Unidad[]> = new Subject<Unidad[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/unidad`);
  }

  setUnidadChange(data: Unidad[]) {
    this.unidadChange.next(data);
  }

  getUnidadChange(){
    return this.unidadChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
