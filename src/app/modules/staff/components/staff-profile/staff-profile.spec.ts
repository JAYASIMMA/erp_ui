import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffProfile } from './staff-profile';

describe('StaffProfile', () => {
  let component: StaffProfile;
  let fixture: ComponentFixture<StaffProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaffProfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffProfile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
