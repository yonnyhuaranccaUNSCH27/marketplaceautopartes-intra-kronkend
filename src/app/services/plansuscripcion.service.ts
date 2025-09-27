import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';

import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';
import { Plansuscripcion } from '../model/plansuscripcion';


@Injectable({
  providedIn: 'root'
})
export class PlansuscripcionService extends GenericService<Plansuscripcion>{
  private PlansuscripcionChange: Subject<Plansuscripcion[]> = new Subject<Plansuscripcion[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/Plansuscripcion`);
  }

  setPlansuscripcionChange(data: Plansuscripcion[]) {
    this.PlansuscripcionChange.next(data);
  }

  getPlansuscripcionChange(){
    return this.PlansuscripcionChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
