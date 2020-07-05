import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagepComponent } from './imagep.component';

describe('ImagepComponent', () => {
  let component: ImagepComponent;
  let fixture: ComponentFixture<ImagepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
