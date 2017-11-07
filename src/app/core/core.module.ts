import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { ServicesModule } from '../services';
import { config } from '../app.config';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { DrawerComponent } from './drawer/drawer.component';

import 'rxjs/add/operator/map';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    ServicesModule.forRoot(),
    AppRoutingModule,
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent,
    DrawerComponent,
  ],
  providers: [
    {
      provide: 'CONFIG',
      useValue: config
    },
  ],
  declarations: [
    HeaderComponent,
    DrawerComponent,
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
