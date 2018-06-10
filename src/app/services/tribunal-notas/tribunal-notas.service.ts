import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';

@Injectable()
export class TribunalNotasService {

  constructor(private http: HttpClient) { }

  getTribunalNotas(id: any): Observable<any> {
    return this.http.get(`${environment.api_url}/tribunalnotas/` + id);
  }

  putTribunalNotas(id: any, data: any): Observable<any> {
    return this.http.put(`${environment.api_url}/tribunalnotas/` + id, data);
  }
}
