import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { user } from 'src/app/core/models/user';
import { ApiService } from 'src/app/core/services/api.service';
import { login } from 'src/app/core/store/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private store: Store<{ users: any }>,
    private api: ApiService,
    private router: Router
  ) {}
  currentUser$: Observable<any> = this.store.select('users');
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  handleLogin() {
    let credinatils: user = {
      ...this.loginForm.value,
    };
    console.log(credinatils);
    this.store.dispatch(login(credinatils));
  }
  ngOnInit(): void {}
}
