import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

@Injectable()
export class FacultadCarreraService {

  constructor(private http: HttpClient) { }

  getFacultad(): Observable<any> {
    return this.http.get<string[]>(`${environment.api_url}/facultad`);
  }

  getCarrera(id: any): Observable<any> {
    return this.http.get(`${environment.api_url}/carrerafacultad/` + id);
  }

  getTemaFinal(): Observable<any> {
    return this.http.get<string[]>(`${environment.api_url}/reportema`);
  }
}
