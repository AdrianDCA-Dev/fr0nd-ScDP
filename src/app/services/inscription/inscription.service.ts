import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

@Injectable()
export class InscriptionService {

  constructor(private http: HttpClient) { }

  getInscripcion(): Observable<any> {
    return this.http.get<string[]>(`${environment.api_url}/inscripcion`);
  }

  postInscripcion(data: any): Observable<any> {
    return this.http.post(`${environment.api_url}/inscripcion`, data);
  }

  putInscripcion(id: any, data: any): Observable<any> {
    return this.http.put(`${environment.api_url}/inscripcion/` + id, data);
  }

  deleteInscripcion(id: any): Observable<any> {
    return this.http.delete(`${environment.api_url}/inscripcion/` + id);
  }

  getDocente(): Observable<any> {
    return this.http.get<string[]>(`${environment.api_url}/getdocente`);
  }

  getEstudiante(): Observable<any> {
    return this.http.get<string[]>(`${environment.api_url}/getestudiante`);
  }
}
