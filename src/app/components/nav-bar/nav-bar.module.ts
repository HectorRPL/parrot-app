import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { NavBarComponent } from './nav-bar.component';


@NgModule({
  declarations: [
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    NavBarComponent,
  ]
})
export class NavBarModule {
}
