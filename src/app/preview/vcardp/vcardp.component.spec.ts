import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VcardpComponent } from './vcardp.component';

describe('VcardpComponent', () => {
  let component: VcardpComponent;
  let fixture: ComponentFixture<VcardpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VcardpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VcardpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
