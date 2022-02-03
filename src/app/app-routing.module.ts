import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: ()=> import('./views/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'order',
    loadChildren: ()=> import('./views/order/order.module').then(m => m.OrderModule),
  },
  { path: '',
    redirectTo: '/auth/signIn',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
