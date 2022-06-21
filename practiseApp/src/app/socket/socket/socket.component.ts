import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SocketService } from '../socket-services--module=socket/socket.module.ts.service';

@Component({
  selector: 'app-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.css'],
})
export class SocketComponent implements OnInit {
  constructor(private socket: SocketService, private router: Router) {}
  messages: any = [];
  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/socket/login']);
  }
  myId = localStorage.getItem('id');

  messageFiled: any;
  send() {
    let data: any = {
      senderId: this.myId,
      reciverId: 444,
      message: this.messageFiled,
    };
    this.socket.emit('message', data);
    this.call();
  }
  call() {
    this.socket.on('message').subscribe((v) => {
      this.messages = v;
    });

    this.socket.emit('connected', this.myId);
  }

  ngOnInit(): void {
    this.call();
  }
}
