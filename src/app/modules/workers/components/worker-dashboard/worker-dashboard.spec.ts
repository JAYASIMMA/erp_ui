import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerDashboard } from './worker-dashboard';

describe('WorkerDashboard', () => {
  let component: WorkerDashboard;
  let fixture: ComponentFixture<WorkerDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkerDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkerDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
