import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SocketService } from './core/services/socket.service';
import { usersSataus } from './core/store/actions';
import { ConatctState } from './home/contact-store/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<{ users: any }>) {}

  title = 'chatAppNew';

  ngOnInit() {}
}
