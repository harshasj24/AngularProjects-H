import { createAction } from '@ngrx/store';
export const addContact = createAction('[contacts] Add Contact', (contact) => ({
  contact,
}));

export const getAllContacts = createAction('[chats] Get All Conatcts');
export const getAllContactsSuccess = createAction(
  '[chats] Get All Conatcts',
  (contacts) => ({ contacts })
);

export const currentConatct = createAction(
  '[contacts] Current Conatct',
  (conatct) => ({ conatct })
);
export const addToChatList = createAction(
  '[contacts] Add To Chat List',
  (contact) => ({ contact })
);
