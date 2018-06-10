import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';

@Injectable()
export class PlanillaControlService {

  constructor(private http: HttpClient) { }

  getPlanCont(id: any): Observable<any> {
    return this.http.get(`${environment.api_url}/planilla/` + id);
  }

  postPlanCont(data: any): Observable<any> {
    return this.http.post(`${environment.api_url}/planilla`, data);
  }

  getPlanInscripcion(id: any): Observable<any> {
    return this.http.get(`${environment.api_url}/planillainscrip/` + id);
  }

  getPlanTutor(id: any): Observable<any> {
    return this.http.get(`${environment.api_url}/planillatutors/` + id);
  }
}
