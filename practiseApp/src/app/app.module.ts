import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PraComponent } from './pra/pra.component';
import { FilterPipe } from './filter.pipe';
import { NamepasscheckComponent } from './namepasscheck/namepasscheck.component';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { DataToTableComponent } from './data-to-table/data-to-table.component';
import { PractiseComponent } from './practise/practise.component';
import { PipePraPipe } from './practise/pipe-pra.pipe';
import { CustomDirDirective } from './practise/custom-dir.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import {
  MatSidenavModule,
  MatDrawerContainer,
} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
  declarations: [
    AppComponent,
    PraComponent,
    FilterPipe,
    NamepasscheckComponent,
    LoginRegComponent,
    DataToTableComponent,
    PractiseComponent,
    PipePraPipe,
    CustomDirDirective,
    SideNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatGridListModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
