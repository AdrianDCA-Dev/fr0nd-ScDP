import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';

@Injectable()
export class CronogramaService {

  constructor(private http: HttpClient) { }

  getCronAct(): Observable<any> {
    return this.http.get<string[]>(`${environment.api_url}/cronoact`);
  }

  postCronoAct(data: any): Observable<any> {
    return this.http.post(`${environment.api_url}/cronoact`, data);
  }

  putCronoAct(id: any, data: any): Observable<any> {
    return this.http.put(`${environment.api_url}/cronoact/` + id, data);
  }

  deleteCronoAct(id: any): Observable<any> {
    return this.http.delete(`${environment.api_url}/cronoact/` + id);
  }
}
