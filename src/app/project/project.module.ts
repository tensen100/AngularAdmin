import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { ProjectRoutingModule } from './project-routing.module';

import { ProjectComponent } from './project/project.component';

@NgModule({
  imports: [
    ShareModule,
    ProjectRoutingModule
  ],
  declarations: [ProjectComponent]
})
export class ProjectModule { }
