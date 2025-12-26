import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseMaterials } from './course-materials';

describe('CourseMaterials', () => {
  let component: CourseMaterials;
  let fixture: ComponentFixture<CourseMaterials>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseMaterials]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseMaterials);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
