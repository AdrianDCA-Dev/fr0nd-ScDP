import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

@Injectable()
export class ModuleService {

  constructor(private http: HttpClient) { }

  getModalidad(): Observable<any> {
    return this.http.get<string[]>(`${environment.api_url}/modalidad`);
  }

}
