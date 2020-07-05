import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsitepComponent } from './websitep.component';

describe('WebsitepComponent', () => {
  let component: WebsitepComponent;
  let fixture: ComponentFixture<WebsitepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsitepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsitepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
