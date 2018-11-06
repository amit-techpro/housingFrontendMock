import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetPasswordLinkComponent } from './reset-password-link/reset-password-link.component';

const routes: Routes = [
  {
    path: '',
    component: ResetPasswordComponent
  },
  {
    path: ':token',
    component: ResetPasswordLinkComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResetPasswordRoutingModule { }
