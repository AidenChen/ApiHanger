import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesModule } from '../services';

import 'rxjs/add/operator/map';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    ServicesModule.forRoot(),
  ],
  exports: [],
  providers: [],
  declarations: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
