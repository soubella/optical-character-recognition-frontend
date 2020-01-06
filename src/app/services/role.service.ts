import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Role } from '../super_admin/models';

@Injectable({ providedIn: 'root' })
export class RoleService {

  constructor(private http: HttpClient) { }
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  getAll() {
    return this.http.get<Role[]>('${config.apiUrl}/roles');
  }

  register(role: Role) {
    console.log('jlskdjv');
    return this.http.post('http://127.0.0.1:8081/roles/add', role, { headers: this.headers });
  }

  delete(id: number) {
    return this.http.delete('${config.apiUrl}/users/${id}');
  }
}
