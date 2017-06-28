import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';

@NgModule({
  imports: [
    SharedModule,
    ProjectRoutingModule
  ],
  declarations: [
    ProjectComponent
  ]
})
export class ProjectModule { }
