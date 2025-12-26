import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing-module';
import { StaffDashboard } from './components/staff-dashboard/staff-dashboard';
import { StaffProfile } from './components/staff-profile/staff-profile';


@NgModule({
  declarations: [
    StaffDashboard,
    StaffProfile
  ],
  imports: [
    CommonModule,
    StaffRoutingModule
  ]
})
export class StaffModule { }
