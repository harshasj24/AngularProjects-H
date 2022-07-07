import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatbordComponent } from './chatbord/chatbord.component';
import { HomepageComponent } from './homepage/homepage.component';

import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SocketsService } from './core/services/sockets.service';

@NgModule({
  declarations: [AppComponent, ChatbordComponent, HomepageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
