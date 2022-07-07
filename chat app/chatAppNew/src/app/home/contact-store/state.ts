import { Contact } from 'src/app/core/models/contacts';

export interface ConatctState {
  contacts: Contact[];
  currentContact: Contact[];
  chatsList: [];
}
export const getFromLoaclStorage = (name: string) => {
  let localStorageData: any = localStorage.getItem(name);
  return JSON.parse(localStorageData);
};
export const initialState: ConatctState = {
  contacts: [],
  currentContact: [
    {
      name: '',
      email: '',
      phone: 0,
    },
  ],
  chatsList: getFromLoaclStorage('chatlist') || [],
};
