import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPerformance } from './student-performance';

describe('StudentPerformance', () => {
  let component: StudentPerformance;
  let fixture: ComponentFixture<StudentPerformance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentPerformance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentPerformance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
