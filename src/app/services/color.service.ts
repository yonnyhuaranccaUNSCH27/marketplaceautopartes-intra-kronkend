import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Color } from '../model/color';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ColorService extends GenericService<Color>{
  private colorChange: Subject<Color[]> = new Subject<Color[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/color`);
  }

  setColorChange(data: Color[]) {
    this.colorChange.next(data);
  }

  getColorChange(){
    return this.colorChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
