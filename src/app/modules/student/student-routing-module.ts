import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDashboard } from './components/student-dashboard/student-dashboard';
import { StudentProfile } from './components/student-profile/student-profile';
import { MarksChart } from './components/marks-chart/marks-chart';
import { Courses } from './components/courses/courses';
import { Attendance } from './components/attendance/attendance';
import { Assignments } from './components/assignments/assignments';
import { Notifications } from './components/notifications/notifications';
import { Feedback } from './components/feedback/feedback';

const routes: Routes = [
  { path: '', component: StudentDashboard },
  { path: 'profile', component: StudentProfile },
  { path: 'courses', component: Courses },
  { path: 'marks', component: MarksChart },
  { path: 'attendance', component: Attendance },
  { path: 'assignments', component: Assignments },
  { path: 'notifications', component: Notifications },
  { path: 'feedback', component: Feedback }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
