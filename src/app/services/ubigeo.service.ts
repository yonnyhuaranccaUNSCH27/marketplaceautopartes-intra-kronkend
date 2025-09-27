import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';

import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';
import { Ubigeo } from '../model/ubigeo';



@Injectable({
  providedIn: 'root'
})
export class UbigeoService extends GenericService<Ubigeo>{
  private UbigeoChange: Subject<Ubigeo[]> = new Subject<Ubigeo[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/Ubigeo`);
  }

  setUbigeoChange(data: Ubigeo[]) {
    this.UbigeoChange.next(data);
  }

  getUbigeoChange(){
    return this.UbigeoChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
