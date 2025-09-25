import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Formapago } from '../model/formapago';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class FormapagoService extends GenericService<Formapago>{
  private formapagoChange: Subject<Formapago[]> = new Subject<Formapago[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/formapago`);
  }

  setFormapagoChange(data: Formapago[]) {
    this.formapagoChange.next(data);
  }

  getFormapagoChange(){
    return this.formapagoChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
