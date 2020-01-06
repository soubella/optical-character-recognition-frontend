import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { User } from '../models';

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private http: HttpClient) { }
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  getAll() {
    return this.http.get<User[]>('${config.apiUrl}/users');
  }

  register(user: User) {
    console.log('jlskdjv');
    return this.http.post('http://127.0.0.1:8081/users/register', user, { headers: this.headers });
  }

  delete(id: number) {
    return this.http.delete('${config.apiUrl}/users/${id}');
  }
}
