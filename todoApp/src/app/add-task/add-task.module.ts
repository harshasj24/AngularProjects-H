import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddtaskRouting } from './add-task-routing.module';
import { MaterialModule } from '../material';
import { AddTaskComponent } from './add-task.component';

@NgModule({
  declarations: [AddTaskComponent],
  imports: [CommonModule, AddtaskRouting, MaterialModule],
})
export class AddTaskModule {}
