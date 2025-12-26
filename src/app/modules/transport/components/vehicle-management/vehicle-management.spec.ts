import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleManagement } from './vehicle-management';

describe('VehicleManagement', () => {
  let component: VehicleManagement;
  let fixture: ComponentFixture<VehicleManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehicleManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleManagement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
