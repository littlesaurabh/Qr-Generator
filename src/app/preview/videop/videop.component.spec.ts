import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideopComponent } from './videop.component';

describe('VideopComponent', () => {
  let component: VideopComponent;
  let fixture: ComponentFixture<VideopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
