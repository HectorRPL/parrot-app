import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlInputPasswordComponent } from './control-input-password/control-input-password.component';
import { MatInputModule } from '@angular/material/input';



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
  ]
})
export class ControlInputPasswordModule { }
