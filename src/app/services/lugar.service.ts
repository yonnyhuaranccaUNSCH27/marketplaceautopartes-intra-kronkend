import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Lugar } from '../model/lugar';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class LugarService extends GenericService<Lugar>{
  private lugarChange: Subject<Lugar[]> = new Subject<Lugar[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/lugar`);
  }

  setLugarChange(data: Lugar[]) {
    this.lugarChange.next(data);
  }

  getLugarChange(){
    return this.lugarChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
