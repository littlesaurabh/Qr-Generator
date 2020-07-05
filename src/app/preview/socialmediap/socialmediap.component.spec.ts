import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialmediapComponent } from './socialmediap.component';

describe('SocialmediapComponent', () => {
  let component: SocialmediapComponent;
  let fixture: ComponentFixture<SocialmediapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialmediapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialmediapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
