import { createReducer, on } from '@ngrx/store';
import { Contact } from 'src/app/core/models/contacts';
import {
  addContact,
  addToChatList,
  currentConatct,
  getAllContacts,
} from './actions';
import { getFromLoaclStorage, initialState } from './state';

let saveToLocalStorage = (name: string, data: any) => {
  localStorage.setItem(name, JSON.stringify(data));
};

// let getAllContactsL = () => {
//   let getAllContacts: any = localStorage.getItem('contacts');
//   return JSON.parse(getAllContacts);
// };
let saveContact = (conatct: Contact) => {
  let allContacts = getFromLoaclStorage('contacts');
  let newContact = allContacts ? [...allContacts, conatct] : [{ ...conatct }];
  saveToLocalStorage('contacts', newContact);
};

let saveChatListLocal = (conatct: any) => {
  let chatList = getFromLoaclStorage('chatlist');
  let newChatList = chatList ? [...chatList, ...conatct] : [...conatct];
  saveToLocalStorage('chatlist', newChatList);
};

export const conatctReducers = createReducer(
  initialState,
  on(addContact, (state, { contact }) => {
    console.log(contact, 'lp');
    saveContact(contact);
    console.log(state.contacts);

    return {
      ...state,
      contacts: [...state.contacts, contact],
    };
  }),
  on(getAllContacts, (state) => {
    return {
      ...state,
      contacts: getFromLoaclStorage('contacts') || [],
    };
  }),
  on(currentConatct, (state, { conatct }) => {
    return {
      ...state,
      currentContact: state.contacts.filter((c) => {
        return c.email === conatct;
      }),
    };
  }),
  on(addToChatList, (state, { contact }) => {
    let chatList = [...state.chatsList].findIndex((index: any) => {
      return index.email === contact;
    });
    console.log(contact);

    if (chatList === -1) {
      let contacts = state.contacts.filter((c) => {
        return c.email === contact;
      });
      console.log(contacts, 'opy');

      saveChatListLocal(contacts);
      return {
        ...state,
        chatsList: getFromLoaclStorage('chatlist'),
      };
    }

    return {
      ...state,
    };
  })
);
console.log(initialState);
