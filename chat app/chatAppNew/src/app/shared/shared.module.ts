import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ChatLayoutComponent } from './layouts/chat-layout/chat-layout.component';
import { HeaderComponent } from './layouts/header/header.component';
import { MaterialModule } from '../material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatContactListComponent } from './layouts/chat-contact-list/chat-contact-list.component';
import { MessagesComponent } from './layouts/messages/messages.component';
import { AddContact } from './dailog/add-contact.component';

@NgModule({
  declarations: [
    ChatLayoutComponent,
    HeaderComponent,
    ChatContactListComponent,
    MessagesComponent,
    AddContact,
  ],
  imports: [CommonModule, MaterialModule,ReactiveFormsModule, FormsModule, SharedRoutingModule],
  exports: [
    ChatLayoutComponent,
    ChatContactListComponent,
    MessagesComponent,
    AddContact,
  ],
})
export class SharedModule {}
