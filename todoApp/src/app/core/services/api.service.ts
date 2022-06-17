import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}
}
