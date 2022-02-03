import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlButtonSignInComponent } from './control-button-sign-in/control-button-sign-in.component';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../../services/auth/auth.service';



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
  ],
  providers: [
    AuthService,
  ]
})
export class ControlButtonSignInModule { }
