import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdlModule } from '@angular-mdl/core';

import { HeaderComponent } from '../header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MdlModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    MdlModule,
    HeaderComponent
  ]
})
export class SharedModule { }
