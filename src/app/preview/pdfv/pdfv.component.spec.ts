import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfvComponent } from './pdfv.component';

describe('PdfvComponent', () => {
  let component: PdfvComponent;
  let fixture: ComponentFixture<PdfvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
