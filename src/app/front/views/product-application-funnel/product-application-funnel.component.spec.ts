import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductApplicationFunnelComponent } from './product-application-funnel.component';

describe('ProductApplicationFunnelComponent', () => {
  let component: ProductApplicationFunnelComponent;
  let fixture: ComponentFixture<ProductApplicationFunnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductApplicationFunnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductApplicationFunnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
