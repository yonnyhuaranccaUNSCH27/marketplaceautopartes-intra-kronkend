import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Carroceria } from '../model/carroceria';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class CarroceriaService extends GenericService<Carroceria>{
  private carroceriaChange: Subject<Carroceria[]> = new Subject<Carroceria[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/carroceria`);
  }

  setCarroceriaChange(data: Carroceria[]) {
    this.carroceriaChange.next(data);
  }

  getCarroceriaChange(){
    return this.carroceriaChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
