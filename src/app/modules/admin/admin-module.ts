import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { AdminDashboard } from './components/admin-dashboard/admin-dashboard';
import { UserManagement } from './components/user-management/user-management';
import { Reports } from './components/reports/reports';


@NgModule({
  declarations: [
    AdminDashboard,
    UserManagement,
    Reports
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
