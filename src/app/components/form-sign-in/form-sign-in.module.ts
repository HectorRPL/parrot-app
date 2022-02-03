import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSignInComponent } from './form-sign-in/form-sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlInputEmailModule } from '../control-input-email/control-input-email.module';
import { ControlInputPasswordModule } from '../control-input-password/control-input-password.module';
import { ControlButtonSignInModule } from '../control-button-sign-in/control-button-sign-in.module';



@NgModule({
  declarations: [
    FormSignInComponent
  ],
  exports: [
    FormSignInComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ControlInputEmailModule,
    ControlInputPasswordModule,
    ControlButtonSignInModule,
  ]
})
export class FormSignInModule { }
