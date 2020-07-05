import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinesspComponent } from './businessp.component';

describe('BusinesspComponent', () => {
  let component: BusinesspComponent;
  let fixture: ComponentFixture<BusinesspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinesspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinesspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
