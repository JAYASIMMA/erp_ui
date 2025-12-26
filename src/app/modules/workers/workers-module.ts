import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkersRoutingModule } from './workers-routing-module';
import { WorkerDashboard } from './components/worker-dashboard/worker-dashboard';
import { TaskList } from './components/task-list/task-list';


@NgModule({
  declarations: [
    WorkerDashboard,
    TaskList
  ],
  imports: [
    CommonModule,
    WorkersRoutingModule
  ]
})
export class WorkersModule { }
