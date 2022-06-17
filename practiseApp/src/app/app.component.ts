import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import jwtDecode from 'jwt-decode';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private api: ApiService) {}
  data: any;
  confirmed: any = [];
  newCon: any;
  conCount: any;
  search: any;

  tokent: any =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhhcnNoYXNqQGdtYWlsLmNvbSIsImZOYW1lIjoiSGFyc2hhIiwibE5hbWUiOiJTIEoiLCJyb2xlIjoic3VwZXJhZG1pbiIsImlhdCI6MTY1MTIxNzIwNH0.ISg7UkJfch_LWGHTAw8fnCwiclEueuOHf0Hwa5l0mAQ';

  getDataInToken(): any {
    try {
      return jwtDecode(this.tokent);
    } catch (error) {
      return null;
    }
  }
  coin: any = [];
  ngOnInit(): void {
    this.api.coin().subscribe((v: any) => {
      console.log(v);
      this.coin = v;
      console.log(
        this.coin.filter((c: any) => {
          return c.last_updated === '2022-05-09T06:41:01.227Z';
        }),
        'filter'
      );
    });

    console.log(this.getDataInToken().role);

    this.api.getData().subscribe((val) => {
      this.data = val;
      console.log(val);
      this.newCon = [...this.data].reduce((a: any, b: any) => {
        return a.Confirmed + b.Confirmed;
      });
      this.data.forEach((val: any) => {
        this.confirmed.push(val.Confirmed);
      });
      console.log(this.newCon);

      this.conCount = this.confirmed.reduce((a: any, b: any) => {
        return a + b;
      });
    });
  }
}
