import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { observable, Observable } from 'rxjs';

@Injectable()
export class SocketService {
  isLoggedIn = false;
  id: any;
  constructor(private socket: Socket) {}
  on(event: any) {
    return new Observable((observer) => {
      this.socket.on(event, (data: any) => {
        observer.next(data);
      });
    });
  }
  emit(event: string, data: any) {
    this.socket.emit(event, data);
  }

  login(logForm: any) {
    let { id, pass } = logForm;
    let usersData: any = localStorage.getItem('usersData');
    let myData: any = JSON.parse(usersData);
    myData.map((v: any) => {
      if (v.id === id && v.pass === pass) {
        this.isLoggedIn = true;
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('id', v.id);
        alert('login sucess');
      } else {
        this.isLoggedIn = false;
        alert('login failed');
      }
    });
  }
  signUp(formVal: any) {
    let { id, pass } = formVal;
    let usersData: any = localStorage.getItem('usersData');
    let newUsersData = JSON.parse(usersData);
    if (usersData) {
      newUsersData.push({ id: id, pass: pass });
      localStorage.setItem('usersData', JSON.stringify(newUsersData));
    } else {
      localStorage.setItem(
        'usersData',
        JSON.stringify([{ id: id, pass: pass }])
      );
    }
  }

  logout() {
    this.isLoggedIn = false;
  }
}
