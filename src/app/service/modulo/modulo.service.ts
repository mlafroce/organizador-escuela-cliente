import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Modulo } from '../../model/modulo';
import { Observable } from 'rxjs';

@Injectable()
export class ModuloService {

  //private headers = new Headers({'Content-Type': 'application/json'});
  private apiUrl = '/api/modulos';

  constructor(protected httpClient: HttpClient) { }

  // Get all posts from the API
  getAllModulos() {
    return this.httpClient.get<Array<Modulo>>(this.apiUrl);
  }

  create(modulo : Modulo): Observable<Modulo> {
  return this.httpClient
    .post<Modulo>(this.apiUrl, modulo);
  }
}
