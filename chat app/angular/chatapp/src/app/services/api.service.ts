import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post('http://localhost:4500/users/login', data);
  }
  chats(data: any) {
    return this.http.post('http://localhost:4500/chat/chats', data);
  }

  getFriends(email: any) {
    return this.http.get(`http://localhost:4500/friends/listFriends/${email}`);
  }
  getAllChats() {
    return this.http.get('http://localhost:4500/chat/messages');
  }
}
