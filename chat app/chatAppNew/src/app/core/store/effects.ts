import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs';

import { ApiService } from '../services/api.service';
import { AuthSerives } from '../services/auth.service';
import { login, loginSuccess } from './actions';

@Injectable()
export class authEffects {
  constructor(
    private router: Router,
    private apiS: ApiService,
    private actions$: Actions,
    private authS: AuthSerives
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      exhaustMap((action) =>
        this.apiS.login(action.credinatls).pipe(
          map((responce) => {
            console.log(responce);

            this.authS.saveUser(responce.data);
            this.router.navigate(['home']);
            return loginSuccess(responce);
          })
        )
      )
    )
  );
}
