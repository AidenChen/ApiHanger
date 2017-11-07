import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
  ]
})
export class SharedModule {
}
