import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Vehiculo } from '../model/vehiculo';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService extends GenericService<Vehiculo>{
  private vehiculoChange: Subject<Vehiculo[]> = new Subject<Vehiculo[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/vehiculo`);
  }

  setVehiculoChange(data: Vehiculo[]) {
    this.vehiculoChange.next(data);
  }

  getVehiculoChange(){
    return this.vehiculoChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
