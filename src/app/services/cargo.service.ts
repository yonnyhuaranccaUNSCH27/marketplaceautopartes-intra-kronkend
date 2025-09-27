import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';

import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';
import { Cargo } from '../model/cargo';


@Injectable({
  providedIn: 'root'
})
export class CargoService extends GenericService<Cargo>{
  private CargoChange: Subject<Cargo[]> = new Subject<Cargo[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/Cargo`);
  }

  setCargoChange(data: Cargo[]) {
    this.CargoChange.next(data);
  }

  getCargoChange(){
    return this.CargoChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
