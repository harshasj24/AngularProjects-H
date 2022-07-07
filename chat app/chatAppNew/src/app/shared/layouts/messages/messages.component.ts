import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { Contact } from 'src/app/core/models/contacts';
import { AuthSerives } from 'src/app/core/services/auth.service';
import { SocketService } from 'src/app/core/services/socket.service';
import { getChats, sendMessage } from 'src/app/home/chat-store/action';
import {
  getChatsState,
  getSelectedChats,
} from 'src/app/home/chat-store/selectors';
import { addToChatList } from 'src/app/home/contact-store/actions';
import { currentUser } from 'src/app/home/contact-store/selectors';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  @ViewChild('scrollable') elemnt: ElementRef;
  isTyping: boolean = false;
  name: any;
  callTimeOut: any = false;
  interval: any;
  constructor(
    private store: Store<{ users: any; message: any; contact: any }>,
    private socket: SocketService,
    public authS: AuthSerives
  ) {}

  selectedUser: Observable<Contact[]> = this.store.select(currentUser);
  currentUserEmail: any;

  ngAfterViewChecked(): void {
    this.scrollTOBottom();
  }
  scrollTOBottom() {
    this.elemnt.nativeElement.scrollTop =
      this.elemnt.nativeElement.scrollHeight;
  }
  messages$: Observable<any> = this.store.select(getSelectedChats);

  ngOnInit(): void {
    this.selectedUser.subscribe((v) => {
      this.name = v[0];
    });
    this.socket.on('status').subscribe((data) => {
      console.log(data);

      data ? (this.isTyping = true) : (this.isTyping = false);
    });
  }

  typingStatus(isTyping: boolean) {
    this.socket.emit('status', {
      isTyping: isTyping,
      toEmail: this.name.email,
    });
  }
  handleInput() {
    this.callTimeOut = true;
    this.typingStatus(true);
  }

  getChat({ email, name }: any) {
    console.log(email);
    this.currentUserEmail = email;
    this.name = name;
    let myEmail = this.authS.getEmail();
    this.socket.emit('getchats', { email, myEmail });
    this.socket.on('getchats').subscribe((d) => {
      console.log(d);
    });
  }

  sendMessage(form: NgForm) {
    if (form.invalid) return;
    console.log(form.value);
    let msgData = {
      fromEmail: this.authS.getEmail(),
      toEmail: this.name.email,
      message: form.value.message,
      time: new Date(),
    };
    this.store.dispatch(getChats([msgData]));
    this.store.dispatch(
      sendMessage({
        myEmail: this.authS.getEmail(),
        otherEmail: this.name.email,
      })
    );
    form.reset();
    this.socket.emit('send message', msgData);
    this.typingStatus(false);
  }
  reciveMessage() {}
}
