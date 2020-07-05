import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookpComponent } from './facebookp.component';

describe('FacebookpComponent', () => {
  let component: FacebookpComponent;
  let fixture: ComponentFixture<FacebookpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
