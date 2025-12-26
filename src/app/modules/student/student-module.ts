import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing-module';
import { StudentDashboard } from './components/student-dashboard/student-dashboard';
import { StudentProfile } from './components/student-profile/student-profile';
import { MarksChart } from './components/marks-chart/marks-chart';


@NgModule({
  declarations: [
    StudentDashboard,
    StudentProfile,
    MarksChart
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
