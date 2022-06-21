import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(environment.evUrl);
  }
  coin() {}
  usergata() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
