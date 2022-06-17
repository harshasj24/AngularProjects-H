import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-namepasscheck',
  templateUrl: './namepasscheck.component.html',
  styleUrls: ['./namepasscheck.component.css'],
})
export class NamepasscheckComponent implements OnInit {
  constructor() {}
  arr = [
    {
      name: 'manu',
      password: 'qwerty',
    },
    {
      name: 'sachin',
      password: 'sachu',
    },
    {
      name: 'manohar',
      password: 'qwerty',
    },
    {
      name: 'rohan',
      password: 'rohana',
    },
    {
      name: 'kharvi',
      password: 'kharvi',
    },
  ];
  handleSubmit(formData: any) {
    console.log(formData.value);
    const { userName, password } = formData.value;
    const arrUserName = this.arr.map((userName) => userName.name);
    const arrPassword = this.arr.map((userName) => userName.password);

    if (arrUserName.includes(userName) && arrPassword.includes(password))
      return window.alert('valid');
    window.alert('invalid');
  }
  ngOnInit(): void {}
}
