import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Announcements } from './announcements';

describe('Announcements', () => {
  let component: Announcements;
  let fixture: ComponentFixture<Announcements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Announcements]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Announcements);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
