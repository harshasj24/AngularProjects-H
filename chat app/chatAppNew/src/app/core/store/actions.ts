import { createAction } from '@ngrx/store';

export const usersSataus = createAction('[chats] Users Status', (data) => ({
  data,
}));
export const login = createAction('[chats] Login', (credinatls) => ({
  credinatls,
}));
export const loginSuccess = createAction(
  '[chats] Login Success',
  (credinatls) => ({ credinatls })
);
