import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { usersStatusReducer } from './core/store/reducers';
import { SharedModule } from './shared/shared.module';
import { authEffects } from './core/store/effects';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptor/auth.interceptor';

import { conatctReducers } from './home/contact-store/reducres';
import { chatsReducers } from './home/chat-store/reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    CoreModule,

    StoreModule.forRoot({ contact: conatctReducers, chats: chatsReducers }),
    EffectsModule.forRoot([authEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
