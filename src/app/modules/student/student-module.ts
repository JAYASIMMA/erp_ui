import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing-module';
import { StudentDashboard } from './components/student-dashboard/student-dashboard';
import { StudentProfile } from './components/student-profile/student-profile';
import { MarksChart } from './components/marks-chart/marks-chart';
import { Courses } from './components/courses/courses';
import { Attendance } from './components/attendance/attendance';
import { Assignments } from './components/assignments/assignments';
import { Notifications } from './components/notifications/notifications';
import { Feedback } from './components/feedback/feedback';


@NgModule({
  declarations: [
    StudentDashboard,
    StudentProfile,
    MarksChart,
    Courses,
    Attendance,
    Assignments,
    Notifications,
    Feedback
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
