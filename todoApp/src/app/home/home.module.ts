import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './dashbord/dashbord.component';
import { Routes } from '@angular/router';
import { MaterialModule } from '../material';
import { RouterModule } from '@angular/router';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { CoreModule } from '../core';
import { ApiService } from '../core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!

FullCalendarModule.registerPlugins([dayGridPlugin, interactionPlugin]); //register a plugin

const routes: Routes = [
  {
    path: '',
    component: DashbordComponent,
  },
];

@NgModule({
  declarations: [DashbordComponent, AllTasksComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    FullCalendarModule,
  ],
  exports: [RouterModule, ReactiveFormsModule],
  providers: [ApiService],
})
export class HomeModule {}
