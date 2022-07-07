import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthSerives } from 'src/app/core/services/auth.service';
import { SocketService } from 'src/app/core/services/socket.service';
import { sendMessage } from 'src/app/home/chat-store/action';
import { chatList } from 'src/app/home/contact-store/selectors';

import { AddContact } from '../../dailog/add-contact.component';

@Component({
  selector: 'app-chat-contact-list',
  templateUrl: './chat-contact-list.component.html',
  styleUrls: ['./chat-contact-list.component.css'],
})
export class ChatContactListComponent implements OnInit {
  constructor(
    private dailog: MatDialog,
    private socket: SocketService,
    private store: Store<{ contact: any }>,
    private auth: AuthSerives,
    private router: Router
  ) {}
  dailogRef: MatDialogRef<any>;
  @Input() sideNav: any;
  @Output() selectedChat = new EventEmitter<any>();
  @Output() sideNavToggle = new EventEmitter<any>();
  chatList: Observable<any> = this.store.select(chatList);
  openDailog() {
    this.dailogRef = this.dailog.open(AddContact, {
      width: '30vw',
    });
  }
  toggleSideNav() {
    this.sideNavToggle.emit();
  }
  ngOnInit(): void {
    console.log(this.sideNav);
  }
  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    this.router.navigate(['/auth/login']);
  }
  selectChat(email: any) {
    this.selectedChat.emit(email);
    // this.store.dispatch(
    //   sendMessage({
    //     myEmail: this.auth.getEmail(),
    //     otherEmail: email,
    //   })
    // );
  }
}
