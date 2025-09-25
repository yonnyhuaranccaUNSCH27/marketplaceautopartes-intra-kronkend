import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Archivo } from '../model/archivo';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ArchivoService extends GenericService<Archivo>{
  private archivoChange: Subject<Archivo[]> = new Subject<Archivo[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/archivo`);
  }

  setArchivoChange(data: Archivo[]) {
    this.archivoChange.next(data);
  }

  getArchivoChange(){
    return this.archivoChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
