import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProfile } from './teacher-profile';

describe('TeacherProfile', () => {
  let component: TeacherProfile;
  let fixture: ComponentFixture<TeacherProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeacherProfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherProfile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
