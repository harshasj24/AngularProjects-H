import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  // data: any = [];
  // setData(values: any) {
  //   this.data.push(values);
  //   localStorage.setItem('data', JSON.stringify(this.data));
  // }
  // getData() {
  //   let data = localStorage.getItem('data');
  //   return data ? JSON.parse(data) : [];
  // }
  // updateData(values: any) {
  //   let index = this.data.findIndex((val: any) => {
  //     val.id === values.id;
  //   });
  //   this.data[index] = values;
  //   console.log(index, 'in ser');

  //   localStorage.setItem('data', JSON.stringify(this.data));
  // }
}
