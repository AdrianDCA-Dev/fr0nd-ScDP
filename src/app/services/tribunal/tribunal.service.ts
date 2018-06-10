import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';

@Injectable()
export class TribunalService {

  constructor(private http: HttpClient) { }

  getTribunal(): Observable<any> {
    return this.http.get<string[]>(`${environment.api_url}/tribunal`);
  }

  postTribunal(data: any): Observable<any> {
    return this.http.post(`${environment.api_url}/tribunal`, data);
  }

  putTribunal(id: any, data: any): Observable<any> {
    return this.http.put(`${environment.api_url}/tribunal/` + id, data);
  }

  deleteTribunal(id: any): Observable<any> {
    return this.http.delete(`${environment.api_url}/tribunal/` + id);
  }

  getDefensaAprobadoUno(): Observable<any> {
    return this.http.get<string[]>(`${environment.api_url}/defunoaprobado`);
  }

  getMostrarTribunales(id: any): Observable<any> {
    return this.http.get(`${environment.api_url}/tutortribunales/` + id);
  }
}
