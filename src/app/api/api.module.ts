import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ApiRoutingModule } from './api-routing.module';
import { ApiComponent } from './api.component';
import { ApiHeaderComponent } from './api-header/api-header.component';
import { ControlBarComponent } from './control-bar/control-bar.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ApiListComponent } from './api-list/api-list.component';
import { ApiDetailComponent } from './api-detail/api-detail.component';

@NgModule({
  imports: [
    SharedModule,
    ApiRoutingModule
  ],
  declarations: [
    ApiComponent,
    ApiHeaderComponent,
    ControlBarComponent,
    CategoryListComponent,
    ApiListComponent,
    ApiDetailComponent
  ]
})
export class ApiModule {
}
