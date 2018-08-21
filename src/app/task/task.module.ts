import { NgModule } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { TaskRoutingModule } from './task-routing.module';
import { ShareModule } from '../share/share.module';

@NgModule({
  imports: [
    ShareModule,
    TaskRoutingModule
  ],
  declarations: [TaskComponent]
})
export class TaskModule { }
