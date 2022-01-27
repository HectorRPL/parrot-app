import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlButtonSignInComponent } from './control-button-sign-in/control-button-sign-in.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ControlButtonSignInComponent,
  ],
  exports: [
    ControlButtonSignInComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ]
})
export class ControlButtonSignInModule { }
