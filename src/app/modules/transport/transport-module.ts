import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransportRoutingModule } from './transport-routing-module';
import { TransportDashboard } from './components/transport-dashboard/transport-dashboard';
import { VehicleManagement } from './components/vehicle-management/vehicle-management';


@NgModule({
  declarations: [
    TransportDashboard,
    VehicleManagement
  ],
  imports: [
    CommonModule,
    TransportRoutingModule
  ]
})
export class TransportModule { }
