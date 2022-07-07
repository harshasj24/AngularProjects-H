import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { SocketsService } from './core/services/sockets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private socket: SocketsService) {}
  title = 'chatapp';
  ngOnInit() {
    console.log('appy');
    this.socket.on('chats').subscribe((data) => {
      console.log(data);
    });
  }
}
