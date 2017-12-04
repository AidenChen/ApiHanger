import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { AuthGuardService } from './auth-guard.service';
import { LocalStorageService } from './local-storage.service';
import { ProjectService } from './project.service';
import { CategoryService } from './category.service';
import { ApiService } from './api.service';

export {
  AuthService,
  UserService,
  AuthGuardService,
  LocalStorageService,
  ProjectService,
  CategoryService,
  ApiService,
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
        LocalStorageService,
        ProjectService,
        CategoryService,
        ApiService,
      ]
    };
  }
}
