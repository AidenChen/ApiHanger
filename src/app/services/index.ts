import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { AuthGuardService } from './auth-guard.service';

export {
  AuthService,
  UserService,
  AuthGuardService,
};

@NgModule()
export class ServicesModule {
  static forRoot () {
    return {
      ngModule: ServicesModule,
      providers: [
        AuthService,
        UserService,
        AuthGuardService,
      ]
    };
  }
}
