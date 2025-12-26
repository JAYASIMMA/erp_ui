import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceManagement } from './attendance-management';

describe('AttendanceManagement', () => {
  let component: AttendanceManagement;
  let fixture: ComponentFixture<AttendanceManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttendanceManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendanceManagement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
