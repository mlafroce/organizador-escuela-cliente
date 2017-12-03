import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Professor } from './professor';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfessorsService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private apiUrl = '/api/profesores';

  constructor(private http: Http) {
  console.log('Creado profesoresService'); }

  // Get all posts from the API
  getAllProfessors() {
    return this.http.get(this.apiUrl)
      .map(res => res.json());
  }

  create(prof : Professor): Promise<Professor> {
  return this.http
    .post(this.apiUrl,
      JSON.stringify(prof),
      {headers: this.headers})
    .toPromise()
    .then(res => res.json().data as Professor)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
