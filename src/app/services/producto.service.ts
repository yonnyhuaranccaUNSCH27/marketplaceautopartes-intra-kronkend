import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Producto } from '../model/producto';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService extends GenericService<Producto>{
  private productoChange: Subject<Producto[]> = new Subject<Producto[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/producto`);
  }

  setProductoChange(data: Producto[]) {
    this.productoChange.next(data);
  }

  getProductoChange(){
    return this.productoChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
