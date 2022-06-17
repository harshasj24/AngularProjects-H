import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  regForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
      ),
    ]),
    cPassword: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
  });

  get email() {
    return this.regForm.get('email');
  }
  get firstName() {
    return this.regForm.get('firstName');
  }
  get lastName() {
    return this.regForm.get('lastName');
  }
  get password() {
    return this.regForm.get('password');
  }
  get cPassword() {
    return this.regForm.get('cPassword');
  }
  get phone() {
    return this.regForm.get('phone');
  }

  constructor() {
    console.log();
  }
  regFormSubmit() {
    console.log(this.regForm.value);
  }

  ngOnInit(): void {}
}
