import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackReview } from './feedback-review';

describe('FeedbackReview', () => {
  let component: FeedbackReview;
  let fixture: ComponentFixture<FeedbackReview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedbackReview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackReview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
