import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlButtonSignUpComponent } from './control-button-sign-up/control-button-sign-up.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ControlButtonSignUpComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    ControlButtonSignUpComponent,
  ]
})
export class ControlButtonSignUpModule { }
