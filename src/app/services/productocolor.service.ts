import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Productocolor } from '../model/productocolor';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ProductocolorService extends GenericService<Productocolor>{
  private productocolorChange: Subject<Productocolor[]> = new Subject<Productocolor[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/productocolor`);
  }

  setProductocolorChange(data: Productocolor[]) {
    this.productocolorChange.next(data);
  }

  getProductocolorChange(){
    return this.productocolorChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
