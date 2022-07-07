import { Injectable } from '@angular/core';
import { Contact } from '../models/contacts';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor() {}

  saveContact(conatct: Contact[]) {
    localStorage.setItem('contacts', JSON.stringify(conatct));
  }
}
