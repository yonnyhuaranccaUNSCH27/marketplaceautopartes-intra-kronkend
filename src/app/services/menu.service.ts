
import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Menu } from '../model/menu';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService extends GenericService<Menu>{
  private menuChange = new Subject<Menu[]>();

  constructor(
    http: HttpClient
  ) {
    super(
      http, 
      `${environment.HOST}/api/menu`
    );
  }

  getMenuByUser(username:string){
    return this.http.post<Menu[]>(`${this.url}/usuario`,username);
  }

  //Cambios

  getMenuChange(){
    return this.menuChange.asObservable();
  }

  setMenuChange(menus:Menu[]){
    this.menuChange.next(menus);
  }
}
