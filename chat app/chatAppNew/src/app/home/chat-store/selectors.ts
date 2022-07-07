import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ChatSate } from './state';

const chatsStates = createFeatureSelector<ChatSate>('chats');
export const getChatsState = createSelector(
  chatsStates,
  (state) => state.messages
);

export const getSelectedChats = createSelector(
  chatsStates,
  (state) => state.selectedMessaes
);
