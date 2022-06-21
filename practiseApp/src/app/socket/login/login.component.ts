import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from '../socket-services--module=socket/socket.module.ts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private socketS: SocketService, private router: Router) {}
  wantSignUp: boolean = false;
  handleLogin(form: any) {
    this.socketS.login(form.value);
    this.router.navigate(['/socket/chat']);
  }
  handleReg(form: any) {
    this.wantSignUp = !this.wantSignUp;
    this.socketS.signUp(form.value);
    alert('id created');
  }
  ngOnInit(): void {}
}
