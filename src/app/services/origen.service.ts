import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Origen } from '../model/origen';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class OrigenService extends GenericService<Origen>{
  private origenChange: Subject<Origen[]> = new Subject<Origen[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/origen`);
  }

  setOrigenChange(data: Origen[]) {
    this.origenChange.next(data);
  }

  getOrigenChange(){
    return this.origenChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
