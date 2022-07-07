import {
  createFeature,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { ConatctState } from './state';

const contactsState = createFeatureSelector<ConatctState>('contact');

export const getContacts = createSelector(contactsState, (state) => {
  return state.contacts;
});
export const currentUser = createSelector(
  contactsState,
  (state) => state.currentContact
);
export const chatList = createSelector(
  contactsState,
  (state) => state.chatsList
);
