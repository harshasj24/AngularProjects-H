import { createReducer, on } from '@ngrx/store';
import { loginSuccess, usersSataus } from './actions';

let initialState: any = [
  {
    email: '',
  },
];

export const usersStatusReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { credinatls }) => {
    console.log(credinatls);
    return [credinatls.data];
  })
);
