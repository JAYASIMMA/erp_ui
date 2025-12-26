import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing-module';
import { TeacherDashboard } from './components/teacher-dashboard/teacher-dashboard';
import { SubjectList } from './components/subject-list/subject-list';
import { StudentPerformance } from './components/student-performance/student-performance';


@NgModule({
  declarations: [
    TeacherDashboard,
    SubjectList,
    StudentPerformance
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
