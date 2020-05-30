import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationOneComponent } from './quotation-one.component';

describe('QuotationOneComponent', () => {
  let component: QuotationOneComponent;
  let fixture: ComponentFixture<QuotationOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
