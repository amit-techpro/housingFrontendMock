import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetPasswordRoutingModule } from './reset-password-routing.module';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { FormsModule } from '@angular/forms';
import { ResetPasswordLinkComponent } from './reset-password-link/reset-password-link.component';

@NgModule({
  imports: [
    CommonModule,
    ResetPasswordRoutingModule,
    FormsModule
  ],
  declarations: [ResetPasswordComponent, ResetPasswordLinkComponent]
})
export class ResetPasswordModule { }
