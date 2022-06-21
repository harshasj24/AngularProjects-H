import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SocketService } from './socket-services--module=socket/socket.module.ts.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private ss: SocketService, private router: Router) {}
  canActivate(): boolean {
    if (localStorage.getItem('isLoggedIn')) {
      return true;
    }
    this.router.navigate(['/socket/login']);
    return false;
  }
}
