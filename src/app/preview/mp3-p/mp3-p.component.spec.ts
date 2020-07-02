import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mp3PComponent } from './mp3-p.component';

describe('Mp3PComponent', () => {
  let component: Mp3PComponent;
  let fixture: ComponentFixture<Mp3PComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mp3PComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mp3PComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
