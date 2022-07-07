import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map, Observable, of } from 'rxjs';
import { AuthSerives } from 'src/app/core/services/auth.service';
import { SocketService } from 'src/app/core/services/socket.service';
import { getChats } from 'src/app/home/chat-store/action';

@Component({
  selector: 'app-chat-layout',
  templateUrl: './chat-layout.component.html',
  styleUrls: ['./chat-layout.component.css'],
})
export class ChatLayoutComponent implements OnInit, AfterViewChecked {
  rotate: any = 0;
  messageInput: any;

  @Input() usersData: any;

  @ViewChild('scrollable') elemnt: ElementRef;
  mar: any = 0;
  name: any;
  constructor(
    private store: Store<{ users: any; message: any }>,
    private socket: SocketService,
    public authS: AuthSerives
  ) {}
  currentUserEmail: any;

  ngAfterViewChecked(): void {
    this.scrollTOBottom();
  }
  scrollTOBottom() {
    console.log(this.elemnt.nativeElement.scrollTop);

    this.elemnt.nativeElement.scrollTop =
      this.elemnt.nativeElement.scrollHeight;
    console.log(this.elemnt.nativeElement.scrollTop);
  }
  status$: Observable<any> = this.store.select('users');
  messages$: Observable<any> = this.store.select('message');

  ngOnInit(): void {
    this.socket.emit('connected', this.authS.getEmail());
    this.socket.on('send message').subscribe((messsage) => {
      console.log('called send message');

      this.store.dispatch(getChats(messsage));
    });
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
    console.log(form.value);
    let msgData = {
      fromEmail: this.authS.getEmail(),
      toEmail: this.currentUserEmail,
      message: form.value.message,
    };
    console.log(msgData);
    this.store.dispatch(getChats([msgData]));
    this.messages$.subscribe((v) => console.log(v));
    form.reset();
    this.socket.emit('send message', msgData);
  }
  reciveMessage() {}
}
