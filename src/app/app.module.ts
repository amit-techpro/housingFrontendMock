import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';


import { UiService } from './services/ui/ui.service';
import { RouterModule } from '@angular/router';
import { HelperService } from './services/helper/helper.service';
import { UserService } from './services/user/user.service';
import { AuthGuardService } from './services/route-guards/auth-guard/auth-guard.service';
import { NoAuthGuardService } from './services/route-guards/no-auth-guard/no-auth-guard.service';








@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    UiService,
    HelperService,
    UserService,
    AuthGuardService,
    NoAuthGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
