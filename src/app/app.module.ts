import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { ProjectModule } from './project/project.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CoreModule,
    AppRoutingModule,
    HomeModule,
    LoginModule,
    ProjectModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
