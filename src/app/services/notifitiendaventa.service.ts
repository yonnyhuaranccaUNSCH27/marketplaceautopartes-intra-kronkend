import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Notifitiendaventa } from '../model/notifitiendaventa';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class NotifitiendaventaService extends GenericService<Notifitiendaventa>{
  private notifitiendaventaChange: Subject<Notifitiendaventa[]> = new Subject<Notifitiendaventa[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/notifitiendaventa`);
  }

  setNotifitiendaventaChange(data: Notifitiendaventa[]) {
    this.notifitiendaventaChange.next(data);
  }

  getNotifitiendaventaChange(){
    return this.notifitiendaventaChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
