import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    OverviewComponent
  ]
})
export class DashboardModule {
}
