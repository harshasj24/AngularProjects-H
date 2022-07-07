import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Form, FormsModule } from '@angular/forms';
import { observable, Observable } from 'rxjs';
import { ApiService } from '../core/services/api.service';
import { AuthService } from '../core/services/auth.service';
import { interval } from 'rxjs';
import { SocketsService } from '../core/services/sockets.service';
@Component({
  selector: 'app-chatbord',
  templateUrl: './chatbord.component.html',
  styleUrls: ['./chatbord.component.css'],
})
export class ChatbordComponent implements OnInit, OnChanges {
  listArr1: any;

  constructor(
    private api: ApiService,
    public auth: AuthService,
    private socket: SocketsService
  ) {
    // this.sub = interval(1000).subscribe((x) => {
    //   this.viewMessages();
    // });
  }
  displayMessage: any = [];
  newVal: any = [];
  sub: any;
  @Input() dataFromParent: any;

  email: any = this.auth.email();
  toEmail: any;
  viewMessages() {
    this.api.getAllChats().subscribe((val: any) => {
      this.newVal = val.data;

      // console.log(val);
      this.sentMessage();
    });
  }
  sentMessage() {
    this.displayMessage = this.newVal.filter((data: any) => {
      return (
        (data.toEmail === this.dataFromParent.email &&
          data.fromEmail === this.email) ||
        (data.toEmail === this.email &&
          data.fromEmail === this.dataFromParent.email)
      );
    });
  }

  ngOnChanges(): void {
    console.log(this.dataFromParent);
    this.sentMessage();
    // this.viewMessages();
  }

  send(senForm: any) {
    console.log(senForm.value);
    this.api.chats(senForm.value).subscribe((val) => {
      console.log(val);
      this.viewMessages();

      console.log(this.dataFromParent);
    });
    this.sentMessage();
  }
  ngOnInit() {
    this.socket.on('chats').subscribe((data) => {
      console.log(data);
    });

    this.viewMessages();
    this.sentMessage();
    // this.recive();
  }
  lo: any = true;
  insert = document.getElementById('insert');
}
