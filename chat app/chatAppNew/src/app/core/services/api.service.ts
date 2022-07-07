import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../models/user';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}
  login(data: user): Observable<any> {
    return this.http.post('http://localhost:4500/users/login', data);
  }
  getAllUsers() {
    return this.http.get('http://localhost:4500/users/users');
  }
}
