import { createReducer, on } from '@ngrx/store';
import { getChats, sendMessage } from './action';
import { initialState } from './state';

export const chatsReducers = createReducer(
  initialState,
  on(getChats, (state, { chats }) => {
    console.log(chats);

    return {
      ...state,
      messages: [...state.messages, ...chats],
    };
  }),
  on(sendMessage, (state, { chats }) => {
    let selectedChats: any = [...state.messages].filter((v) => {
      return (
        (v.fromEmail === chats.myEmail && v.toEmail === chats.otherEmail) ||
        (v.toEmail === chats.myEmail && v.fromEmail === chats.otherEmail)
      );
    });
    return {
      ...state,
      selectedMessaes: [...selectedChats],
    };
  })
);
