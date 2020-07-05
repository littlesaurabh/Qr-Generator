import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackpComponent } from './feedbackp.component';

describe('FeedbackpComponent', () => {
  let component: FeedbackpComponent;
  let fixture: ComponentFixture<FeedbackpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
