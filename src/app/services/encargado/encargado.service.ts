import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';

@Injectable()
export class EncargadoService {

  constructor(private http: HttpClient) { }

  getEncargadoInforme(id: any): Observable<any> {
    return this.http.get(`${environment.api_url}/encargadoinforme/` + id);
  }

}
