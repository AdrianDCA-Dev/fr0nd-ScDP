import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';

@Injectable()
export class DefensaService {

  constructor(private http: HttpClient) { }

  getCronDef(): Observable<any> {
    return this.http.get<string[]>(`${environment.api_url}/crondef`);
  }

  postCronDef(data: any): Observable<any> {
    return this.http.post(`${environment.api_url}/crondef`, data);
  }

  putCronDef(id: any, data: any): Observable<any> {
    return this.http.put(`${environment.api_url}/crondef/` + id, data);
  }

  deleteCronDef(id: any): Observable<any> {
    return this.http.delete(`${environment.api_url}/crondef/` + id);
  }

  getInscripcionActivo(): Observable<any> {
    return this.http.get<string[]>(`${environment.api_url}/cronogramaactivos`);
  }
}

