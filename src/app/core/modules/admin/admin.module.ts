import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../../../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { DashboardService } from './services/dashboard.service';
import { AreaSetupComponent } from './area-setup/area-setup.component';
import { BranchComponent } from './branch/branch.component';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  declarations: [DashboardComponent, ProfileComponent, AreaSetupComponent, BranchComponent],
  providers: [
    DashboardService
  ]
})
export class AdminModule { }
