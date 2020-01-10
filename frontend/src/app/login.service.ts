import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/User';
import { stringify } from '@angular/core/src/render3/util';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  login(user: User) {
    return this.http.post(`${this.uri}/login`, user);
  }

  getUser(email: string, parola: string): Observable<number> {
    return this.http.get<number>(`${this.uri}/loginn/${email}/${parola}`);
  }
}

