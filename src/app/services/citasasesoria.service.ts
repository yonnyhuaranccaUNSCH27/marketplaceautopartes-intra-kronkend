import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';

import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';
import { Citasasesoria } from '../model/citasasesoria';



@Injectable({
  providedIn: 'root'
})
export class CitasasesoriaService extends GenericService<Citasasesoria>{
  private CitasasesoriaChange: Subject<Citasasesoria[]> = new Subject<Citasasesoria[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/Citasasesoria`);
  }

  setCitasasesoriaChange(data: Citasasesoria[]) {
    this.CitasasesoriaChange.next(data);
  }

  getCitasasesoriaChange(){
    return this.CitasasesoriaChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
