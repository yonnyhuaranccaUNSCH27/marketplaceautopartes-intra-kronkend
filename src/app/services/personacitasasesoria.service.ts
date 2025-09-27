import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';

import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';
import { Personacitasasesoria } from '../model/personacitasasesoria';



@Injectable({
  providedIn: 'root'
})
export class PersonacitasasesoriaService extends GenericService<Personacitasasesoria>{
  private PersonacitasasesoriaChange: Subject<Personacitasasesoria[]> = new Subject<Personacitasasesoria[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/Personacitasasesoria`);
  }

  setPersonacitasasesoriaChange(data: Personacitasasesoria[]) {
    this.PersonacitasasesoriaChange.next(data);
  }

  getPersonacitasasesoriaChange(){
    return this.PersonacitasasesoriaChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
