import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { OrderRoutingModule } from './order-routing.module';
import { NavBarModule } from '../../components/nav-bar/nav-bar.module';


@NgModule({
  declarations: [
    OrderComponent,
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    NavBarModule
  ]
})
export class OrderModule {
}
