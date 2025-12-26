import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassManagement } from './class-management';

describe('ClassManagement', () => {
  let component: ClassManagement;
  let fixture: ComponentFixture<ClassManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClassManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassManagement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
