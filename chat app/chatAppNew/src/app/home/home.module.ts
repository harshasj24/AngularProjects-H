import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { usersStatusReducer } from '../core/store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { chatsReducers } from './chat-store/reducers';

import { MaterialModule } from '../material';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    SharedModule,
    MaterialModule,
  ],
})
export class HomeModule {}
