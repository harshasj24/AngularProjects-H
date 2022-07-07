import { Injectable } from '@angular/core';

@Injectable()
export class AuthSerives {
  constructor() {}
  saveUser(userDetalis: any) {
    localStorage.setItem('token', userDetalis.token);
    localStorage.setItem('email', userDetalis.email);
  }

  getToken() {
    return localStorage.getItem('token');
  }
  getEmail() {
    return localStorage.getItem('email');
  }
}
