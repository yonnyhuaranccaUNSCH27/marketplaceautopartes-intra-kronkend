import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Rol } from '../model/rol';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class RolService extends GenericService<Rol>{
  private rolChange: Subject<Rol[]> = new Subject<Rol[]>;
  private messageChange: Subject<string>=new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService:TokenService
  ) {
    super(http, `${environment.HOST}/api/categoria`); 
  }

  setMenuCategoriaChange(data: Rol[]) {
    this.rolChange.next(data);
  }

  getMenuCategoriaChange(){
    return this.rolChange.asObservable();
  }

  setMessageChange(data:string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}