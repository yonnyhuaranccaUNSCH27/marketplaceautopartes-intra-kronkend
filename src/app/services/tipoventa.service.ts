import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Tipoventa } from '../model/tipoventa';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class TipoventaService extends GenericService<Tipoventa>{
  private tipoventaChange: Subject<Tipoventa[]> = new Subject<Tipoventa[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/tipoventa`);
  }

  setTipoventaChange(data: Tipoventa[]) {
    this.tipoventaChange.next(data);
  }

  getTipoventaChange(){
    return this.tipoventaChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
