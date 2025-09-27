import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Listavehiculo } from '../model/listavehiculo';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ListavehiculoService extends GenericService<Listavehiculo>{
  private listavehiculoChange: Subject<Listavehiculo[]> = new Subject<Listavehiculo[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/listavehiculo`);
  }

  setListavehiculoChange(data: Listavehiculo[]) {
    this.listavehiculoChange.next(data);
  }

  getListavehiculoChange(){
    return this.listavehiculoChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
