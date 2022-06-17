import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}
  loginForm = new FormGroup({
    email: new FormControl([]),
    password: new FormControl([]),
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
  ngOnInit(): void {}
}
