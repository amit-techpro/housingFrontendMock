import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../../../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { DashboardService } from './services/dashboard.service';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  declarations: [DashboardComponent, ProfileComponent],
  providers: [
    DashboardService
  ]
})
export class AdminModule { }
