import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlInputEmailComponent } from './control-input-email/control-input-email.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ControlInputEmailComponent,
  ],
  exports: [
    ControlInputEmailComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
  ]
})
export class ControlInputEmailModule { }
