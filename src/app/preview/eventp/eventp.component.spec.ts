import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventpComponent } from './eventp.component';

describe('EventpComponent', () => {
  let component: EventpComponent;
  let fixture: ComponentFixture<EventpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
