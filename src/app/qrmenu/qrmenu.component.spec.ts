import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrmenuComponent } from './qrmenu.component';

describe('QrmenuComponent', () => {
  let component: QrmenuComponent;
  let fixture: ComponentFixture<QrmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
