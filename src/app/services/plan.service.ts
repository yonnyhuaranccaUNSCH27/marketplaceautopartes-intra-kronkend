import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';

import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';
import { Plan } from '../model/plan';


@Injectable({
  providedIn: 'root'
})
export class PlanService extends GenericService<Plan>{
  private PlanChange: Subject<Plan[]> = new Subject<Plan[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor(
    protected override http: HttpClient,
    private tokenService: TokenService
  ) {
    super(http, `${environment.HOST}/api/Plan`);
  }

  setPlanChange(data: Plan[]) {
    this.PlanChange.next(data);
  }

  getPlanChange(){
    return this.PlanChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
