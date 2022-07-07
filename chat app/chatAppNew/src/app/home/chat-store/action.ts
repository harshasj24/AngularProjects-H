import { createAction } from '@ngrx/store';
// users

// chats
export const getChats = createAction('[chats] GetChats', (chats) => ({
  chats,
}));
export const sendMessage = createAction('[chats] Send Message', (chats) => ({
  chats,
}));
