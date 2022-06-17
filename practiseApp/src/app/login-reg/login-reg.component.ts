import { Component, OnInit } from '@angular/core';
import { LogregService } from './logreg.service';

@Component({
  selector: 'app-login-reg',
  templateUrl: './login-reg.component.html',
  styleUrls: ['./login-reg.component.css'],
})
export class LoginRegComponent implements OnInit {
  constructor(private ser: LogregService) {}
  onSub: any = false;
  flag: any = true;
  handleRegForm(regForm: any): any {
    let usersData = this.ser.getData();
    console.log(regForm);

    if (regForm.invalid) return alert('enter all fields');
    if (regForm.value.password !== regForm.value.confirmPassword)
      return (this.flag = !this.flag);

    let userData = usersData.filter(
      (d: any) => d.userId === regForm.value.userId
    ).length;
    console.log(userData);

    if (userData === 0) {
      this.ser.setData(regForm.value);
      alert('Registration Sucessfull');
    } else {
      alert('User Already Registerd');
    }

    console.log(regForm.value);
  }
  ngOnInit(): void {}
}
