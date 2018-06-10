import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';

@Injectable()
export class PlanillaContTutorService {

  constructor(private http: HttpClient) { }

  getPlanillaContTutor(id: any): Observable<any> {
    return this.http.get(`${environment.api_url}/planillatutor/` + id);
  }

  postPlanillaContTutor(data: any): Observable<any> {
    return this.http.post(`${environment.api_url}/planillatutor`, data);
  }

  putPlanillaContTutor(id: any, data: any): Observable<any> {
    return this.http.put(`${environment.api_url}/planillatutor/` + id, data);
  }

  putAprobadoTutor(id: any, data: any): Observable<any> {
    return this.http.put(`${environment.api_url}/aprobadouno/` + id, data);
  }
}
