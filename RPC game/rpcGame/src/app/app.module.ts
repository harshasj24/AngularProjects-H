import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainmenuComponent } from './components/mainmenu/mainmenu.component';
import { VscomputerComponent } from './components/vscomputer/vscomputer.component';
import { PopupComponent } from './components/popup/popup.component';
import { VictroypopupComponent } from './components/victroypopup/victroypopup.component';

@NgModule({
  declarations: [
    AppComponent,
    MainmenuComponent,
    VscomputerComponent,
    PopupComponent,
    VictroypopupComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
