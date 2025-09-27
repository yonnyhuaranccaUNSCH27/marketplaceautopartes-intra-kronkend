import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';

import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';
import { Menurol } from '../model/menurol';



@Injectable({
  providedIn: 'root'
})
export class MenurolService extends GenericService<Menurol>{
  private MenurolChange: Subject<Menurol[]> = new Subject<Menurol[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/Menurol`);
  }

  setMenurolChange(data: Menurol[]) {
    this.MenurolChange.next(data);
  }

  getMenurolChange(){
    return this.MenurolChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
