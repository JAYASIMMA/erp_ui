import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'student', loadChildren: () => import('./modules/student/student-module').then(m => m.StudentModule) },
  { path: 'teacher', loadChildren: () => import('./modules/teacher/teacher-module').then(m => m.TeacherModule) },
  { path: 'admin', loadChildren: () => import('./modules/admin/admin-module').then(m => m.AdminModule) },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth-module').then(m => m.AuthModule) },
  { path: 'transport', loadChildren: () => import('./modules/transport/transport-module').then(m => m.TransportModule) },
  { path: 'workers', loadChildren: () => import('./modules/workers/workers-module').then(m => m.WorkersModule) },
  { path: 'staff', loadChildren: () => import('./modules/staff/staff-module').then(m => m.StaffModule) },
  { path: '', loadChildren: () => import('./modules/home/home-module').then(m => m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
