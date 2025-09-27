import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Clasevehiculo } from '../model/clasevehiculo';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ClasevehiculoService extends GenericService<Clasevehiculo>{
  private clasevehiculoChange: Subject<Clasevehiculo[]> = new Subject<Clasevehiculo[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/clasevehiculo`);
  }

  setClasevehiculoChange(data: Clasevehiculo[]) {
    this.clasevehiculoChange.next(data);
  }

  getClasevehiculoChange(){
    return this.clasevehiculoChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
