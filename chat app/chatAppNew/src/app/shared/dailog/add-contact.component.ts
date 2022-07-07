import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/core/models/contacts';
import { addContact } from 'src/app/home/contact-store/actions';
import { ConatctState } from 'src/app/home/contact-store/state';

@Component({
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
  selector: 'app-add-contact',
})
export class AddContact implements OnInit {
  constructor(
    private store: Store<{ contact: any }>,
    private dailog: MatDialog
  ) {}
  ngOnInit(): void {}
  dailogRef: MatDialogRef<any>;
  contacts$: Observable<{ contact: any }> = this.store.select('contact');
  addContact = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
  });

  handleAddContact() {
    let conatct: Contact = { ...this.addContact.value };
    this.store.dispatch(addContact(conatct));
    console.log('submitted');
    this.dailog.closeAll();
  }
}
