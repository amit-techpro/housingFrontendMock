import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { AuthGuardService } from './services/route-guards/auth-guard/auth-guard.service';
import { NoAuthGuardService } from './services/route-guards/no-auth-guard/no-auth-guard.service';
import { UiService } from './services/ui/ui.service';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';


import { UserService } from './services/user/user.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthGuardService,
    NoAuthGuardService,
    UiService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
