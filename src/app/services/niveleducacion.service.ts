import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';

import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';
import { Niveleducacion } from '../model/niveleducacion';



@Injectable({
  providedIn: 'root'
})
export class NiveleducacionService extends GenericService<Niveleducacion>{
  private NiveleducacionChange: Subject<Niveleducacion[]> = new Subject<Niveleducacion[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/Niveleducacion`);
  }

  setNiveleducacionChange(data: Niveleducacion[]) {
    this.NiveleducacionChange.next(data);
  }

  getNiveleducacionChange(){
    return this.NiveleducacionChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
