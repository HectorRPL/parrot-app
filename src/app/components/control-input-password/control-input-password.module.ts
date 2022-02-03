import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlInputPasswordComponent } from './control-input-password/control-input-password.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ControlInputPasswordComponent,
  ],
  exports: [
    ControlInputPasswordComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
  ]
})
export class ControlInputPasswordModule { }
