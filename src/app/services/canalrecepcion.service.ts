import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Canalrecepcion } from '../model/canalrecepcion';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class CanalrecepcionService extends GenericService<Canalrecepcion>{
  private canalrecepcionChange: Subject<Canalrecepcion[]> = new Subject<Canalrecepcion[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/canalrecepcion`);
  }

  setCanalrecepcionChange(data: Canalrecepcion[]) {
    this.canalrecepcionChange.next(data);
  }

  getCanalrecepcionChange(){
    return this.canalrecepcionChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
