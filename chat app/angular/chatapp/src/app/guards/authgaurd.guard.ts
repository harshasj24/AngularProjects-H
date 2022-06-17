import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthgaurdGuard implements CanActivate {
  constructor(private authServices: AuthService, private router: Router) {}
  canActivate(): boolean {
    if (this.authServices.token()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
