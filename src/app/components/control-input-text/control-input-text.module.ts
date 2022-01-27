import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlInputTextComponent } from './control-input-text/control-input-text.component';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    ControlInputTextComponent,
  ],
  exports: [
    ControlInputTextComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
  ]
})
export class ControlInputTextModule {
}
