import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SocketsService } from 'src/app/core/services/sockets.service';
import { ApiService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router,
    private socket: SocketsService
  ) {}
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  data: any;

  login() {
    console.log(this.loginForm.value);
    this.auth.login(this.loginForm.value).subscribe((val) => {
      console.log(val);
      this.router.navigate(['/home']);
      this.data = val;
    });
  }

  ngOnInit(): void {
    console.log(localStorage.getItem('email'));
  }
}
