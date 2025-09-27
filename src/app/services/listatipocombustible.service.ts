import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Listatipocombustible } from '../model/listatipocombustible';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ListatipocombustibleService extends GenericService<Listatipocombustible>{
  private listatipocombustibleChange: Subject<Listatipocombustible[]> = new Subject<Listatipocombustible[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/listatipocombustible`);
  }

  setListatipocombustibleChange(data: Listatipocombustible[]) {
    this.listatipocombustibleChange.next(data);
  }

  getListatipocombustibleChange(){
    return this.listatipocombustibleChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
