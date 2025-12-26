import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherDashboard } from './components/teacher-dashboard/teacher-dashboard';
import { TeacherProfile } from './components/teacher-profile/teacher-profile';
import { SubjectList } from './components/subject-list/subject-list';
import { StudentPerformance } from './components/student-performance/student-performance';
import { ClassManagement } from './components/class-management/class-management';
import { CourseMaterials } from './components/course-materials/course-materials';
import { MarksEntry } from './components/marks-entry/marks-entry';
import { AttendanceManagement } from './components/attendance-management/attendance-management';
import { Announcements } from './components/announcements/announcements';
import { FeedbackReview } from './components/feedback-review/feedback-review';

const routes: Routes = [
  { path: '', component: TeacherDashboard },
  { path: 'profile', component: TeacherProfile },
  { path: 'subjects', component: SubjectList },
  { path: 'class-management', component: ClassManagement },
  { path: 'materials', component: CourseMaterials },
  { path: 'marks-entry', component: MarksEntry },
  { path: 'attendance', component: AttendanceManagement },
  { path: 'performance', component: StudentPerformance },
  { path: 'announcements', component: Announcements },
  { path: 'feedback', component: FeedbackReview }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
