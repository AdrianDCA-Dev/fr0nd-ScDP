import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';

@Injectable()
export class ReportesService {

  constructor(private http: HttpClient) { }

  getInscripReport(): Observable<any> {
    return this.http.get<string>(`${environment.api_url}/inscripreport`);
  }

  getReporAA(id: any): Observable<any> {
    return this.http.get(`${environment.api_url}/reporteaa/` + id);
  }

  getReporCR(): Observable<any> {
    return this.http.get(`${environment.api_url}/reportecr`);
  }
}
