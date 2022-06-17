import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material';
import { CalanderComponent } from './calander/calander.component';
import { TaskCardComponent } from './cards';
import { AddTaskDialog } from './dialogs';

@NgModule({
  declarations: [CalanderComponent, TaskCardComponent, AddTaskDialog],
  imports: [CommonModule, MaterialModule],
  exports: [CalanderComponent, TaskCardComponent, AddTaskDialog],
})
export class SharedModule {}
