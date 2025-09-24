import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Banco } from '../model/banco';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class BancoService extends GenericService<Banco>{
  private bancoChange: Subject<Banco[]> = new Subject<Banco[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/banco`);
  }

  setBancoChange(data: Banco[]) {
    this.bancoChange.next(data);
  }

  getBancoChange(){
    return this.bancoChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
