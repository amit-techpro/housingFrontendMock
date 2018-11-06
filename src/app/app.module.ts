import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { AuthGuardService } from './services/route-guards/auth-guard/auth-guard.service';
import { NoAuthGuardService } from './services/route-guards/no-auth-guard/no-auth-guard.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuardService,
    NoAuthGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
