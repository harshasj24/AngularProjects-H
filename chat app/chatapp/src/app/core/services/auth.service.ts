import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { ApiService } from './api.service';
import { SocketsService } from './sockets.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: ApiService, private socket: SocketsService) {}
  login(data: any) {
    return this.auth.login(data).pipe(
      tap((response: any) => {
        if (response.data) {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('email', response.data.email);
          this.socket.emit('connected', data.email);
        }
      })
    );
  }
  token() {
    return localStorage.getItem('token');
  }
  email() {
    return localStorage.getItem('email');
  }
}
