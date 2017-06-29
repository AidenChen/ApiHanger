import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ApiRoutingModule } from './api-routing.module';
import { ApiComponent } from './api.component';

@NgModule({
  imports: [
    SharedModule,
    ApiRoutingModule
  ],
  declarations: [
    ApiComponent
  ]
})
export class ApiModule {
}
