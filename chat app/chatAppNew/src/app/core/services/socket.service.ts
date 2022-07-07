import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
import { AuthSerives } from './auth.service';

@Injectable()
export class SocketService {
  socket: io.Socket;
  constructor(private authS: AuthSerives) {
    this.socket = io.connect('http://localhost:4500', {
      query: { token: authS.getToken() },
    });
  }
  on(event: string) {
    return new Observable((subscriber) => {
      this.socket.on(event, (responce) => {
        return subscriber.next(responce);
      });
    });
  }

  emit(event: string, data: any) {
    this.socket.emit(event, data);
  }
}
