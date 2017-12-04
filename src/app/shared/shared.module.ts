import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatCardModule,
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatCheckboxModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
  ]
})
export class SharedModule {
}
