import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Docente } from '../../model/docente';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  private apiUrl = 'api/docentes';

  constructor(protected httpClient: HttpClient) { }

  // Obtiene todos los docentes
  getAllDocentes() {
    return this.httpClient.get<Array<Docente>>(this.apiUrl);
  }

  update(docente: Docente) {
    return this.httpClient.put<Docente>(this.apiUrl, docente);
  }

  insert(docente: Docente) {
    return this.httpClient.post<Docente>(this.apiUrl, docente);
  }
}
