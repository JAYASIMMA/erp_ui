import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing-module';
import { TeacherDashboard } from './components/teacher-dashboard/teacher-dashboard';
import { SubjectList } from './components/subject-list/subject-list';
import { StudentPerformance } from './components/student-performance/student-performance';
import { TeacherProfile } from './components/teacher-profile/teacher-profile';
import { ClassManagement } from './components/class-management/class-management';
import { CourseMaterials } from './components/course-materials/course-materials';
import { MarksEntry } from './components/marks-entry/marks-entry';
import { AttendanceManagement } from './components/attendance-management/attendance-management';
import { Announcements } from './components/announcements/announcements';
import { FeedbackReview } from './components/feedback-review/feedback-review';


@NgModule({
  declarations: [
    TeacherDashboard,
    SubjectList,
    StudentPerformance,
    TeacherProfile,
    ClassManagement,
    CourseMaterials,
    MarksEntry,
    AttendanceManagement,
    Announcements,
    FeedbackReview
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
