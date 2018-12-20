import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = '/auth/userData';

  constructor(protected httpClient: HttpClient) { }

  getProfile() {
    console.log("Service.getProfile() ->");
    let cached: any;
    if (cached = sessionStorage.getItem(this.apiUrl)) {
      return new Observable(JSON.parse(cached));
    } else {
      let request = this.httpClient.get(this.apiUrl);
      return request
        .map((response: Response) => {
        if (response.status == 200) {
          sessionStorage.setItem(this.apiUrl, response.toString());
        }
        return response;
      });
    }
  }
}
