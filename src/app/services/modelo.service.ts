import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Modelo } from '../model/modelo';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ModeloService extends GenericService<Modelo>{
  private modeloChange: Subject<Modelo[]> = new Subject<Modelo[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/modelo`);
  }

  setModeloChange(data: Modelo[]) {
    this.modeloChange.next(data);
  }

  getModeloChange(){
    return this.modeloChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
