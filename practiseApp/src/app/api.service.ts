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
  coin() {
    return this.http.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    ).pipe(
      catchError((error)=>error?)
    );
  }
  usergata() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
