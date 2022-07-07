import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../core/services/api.service';
import { AuthService } from '../core/services/auth.service';
import { SocketsService } from '../core/services/sockets.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  constructor(
    private router: Router,
    private api: ApiService,
    private auth: AuthService,
    private socket: SocketsService
  ) {}

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  emailToChild: any = false;
  allFriends: any = [];
  userEmail(email: any) {
    this.emailToChild = email;
  }

  getFriends() {
    this.api.getFriends(this.auth.email()).subscribe((val: any) => {
      this.allFriends = val.data.friendsList;
      console.log(val);
    });
  }
  ngOnInit(): void {
    this.getFriends();
    this.socket.on('chats').subscribe((data) => {
      console.log(data);
    });
  }
}
