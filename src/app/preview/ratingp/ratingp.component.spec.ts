import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingpComponent } from './ratingp.component';

describe('RatingpComponent', () => {
  let component: RatingpComponent;
  let fixture: ComponentFixture<RatingpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
