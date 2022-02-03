import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from '../services/auth/auth.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorRequestService } from '../services/interceptor-request/interceptor-request.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    { // add to any request Authorization: refresh_token Headers
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorRequestService,
      multi: true,
    }

  ],
  exports: [
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {
}
