import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogregService {
  constructor() {}
  usersData: any = [];
  setData(data: any) {
    this.usersData.push(data);
    localStorage.setItem('usersData', JSON.stringify(this.usersData));
  }
  getData() {
    const usersData = localStorage.getItem('usersData');
    return usersData ? JSON.parse(usersData) : [];
  }
}
