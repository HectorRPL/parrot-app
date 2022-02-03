import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { SignInRoutingModule } from './sign-in-routing.module';
import { ControlInputPasswordModule } from '../../../components/control-input-password/control-input-password.module';
import { ControlButtonSignInModule } from '../../../components/control-button-sign-in/control-button-sign-in.module';
import { ControlInputEmailModule } from '../../../components/control-input-email/control-input-email.module';
import { FormSignInModule } from '../../../components/form-sign-in/form-sign-in.module';


@NgModule({
  declarations: [
    SignInComponent,
  ],
  imports: [
    CommonModule,
    SignInRoutingModule,
    ControlInputPasswordModule,
    ControlButtonSignInModule,
    ControlInputEmailModule,
    FormSignInModule,
  ]
})
export class SignInModule {
}
