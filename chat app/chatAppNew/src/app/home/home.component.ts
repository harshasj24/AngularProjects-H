import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Contact } from '../core/models/contacts';
import { AuthSerives } from '../core/services/auth.service';
import { SocketService } from '../core/services/socket.service';
import { usersSataus } from '../core/store/actions';
import { getChats, sendMessage } from './chat-store/action';

import { currentConatct, getAllContacts } from './contact-store/actions';
import { currentUser, getContacts } from './contact-store/selectors';
import { ConatctState } from './contact-store/state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private socket: SocketService,
    private store: Store<{ contact: any }>,
    private authS: AuthSerives
  ) {}

  @ViewChild('sidenav') sideNav: MatSidenav;
  isChatSelected: boolean = false;

  allContacts$: Observable<Contact[]> = this.store.select(getContacts);
  selectedUser: Observable<Contact[]> = this.store.select(currentUser);

  ngOnInit(): void {
    this.store.dispatch(getAllContacts());
    this.socket.emit('connected', this.authS.getEmail());
    this.socket.emit('get message', this.authS.getEmail());
    this.socket.on('get message').subscribe((messsage) => {
      console.log(messsage, 'msg');
      this.store.dispatch(getChats(messsage));
      this.setMsg();
    });
    this.setMsg();
  }

  setMsg() {
    this.selectedUser.subscribe((v: any) => {
      this.store.dispatch(
        sendMessage({
          myEmail: this.authS.getEmail(),
          otherEmail: v[0].email,
        })
      );
    });
  }
  dispatchCurentUser(email: string) {
    this.store.dispatch(currentConatct(email));
  }
  toggleSideNav(str: any) {
    this.sideNav.open();
  }
  handleCurrentUser(email: string) {
    this.dispatchCurentUser(email);
    this.isChatSelected = true;
  }
  selectedChat(email: any) {
    this.isChatSelected = true;
    this.dispatchCurentUser(email);
  }
}
