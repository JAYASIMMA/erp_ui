import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksChart } from './marks-chart';

describe('MarksChart', () => {
  let component: MarksChart;
  let fixture: ComponentFixture<MarksChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarksChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarksChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
