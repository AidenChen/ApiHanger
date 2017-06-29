import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MdlModule } from '@angular-mdl/core';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { ProjectModule } from './project/project.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MdlModule,
    AppRoutingModule,
    HomeModule,
    ProjectModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
