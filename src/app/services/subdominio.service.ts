import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';

import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';
import { Subdominio } from '../model/subdominio';


@Injectable({
  providedIn: 'root'
})
export class SubdominioService extends GenericService<Subdominio>{
  private SubdominioChange: Subject<Subdominio[]> = new Subject<Subdominio[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/Subdominio`);
  }

  setSubdominioChange(data: Subdominio[]) {
    this.SubdominioChange.next(data);
  }

  getSubdominioChange(){
    return this.SubdominioChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
