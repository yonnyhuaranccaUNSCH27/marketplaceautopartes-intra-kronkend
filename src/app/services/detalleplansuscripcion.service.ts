import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';

import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';
import { Detalleplansuscripcion } from '../model/detalleplansuscripcion';


@Injectable({
  providedIn: 'root'
})
export class DetalleplansuscripcionService extends GenericService<Detalleplansuscripcion>{
  private DetalleplansuscripcionChange: Subject<Detalleplansuscripcion[]> = new Subject<Detalleplansuscripcion[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/Detalleplansuscripcion`);
  }

  setDetalleplansuscripcionChange(data: Detalleplansuscripcion[]) {
    this.DetalleplansuscripcionChange.next(data);
  }

  getDetalleplansuscripcionChange(){
    return this.DetalleplansuscripcionChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
