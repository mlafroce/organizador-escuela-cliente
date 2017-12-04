import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Modulo } from '../../model/modulo';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class ModuloService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private apiUrl = '/api/modulos';

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllModulos() {
    return this.http.get(this.apiUrl)
      .map(res => res.json());
  }

  create(prof : Modulo): Promise<Modulo> {
  return this.http
    .post(this.apiUrl,
      JSON.stringify(prof),
      {headers: this.headers})
    .toPromise()
    .then(res => res.json().data as Modulo)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
