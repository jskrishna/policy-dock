import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProductProviderPolicyAdminComponent } from './table-product-provider-policy-admin.component';

describe('TableProductProviderPolicyAdminComponent', () => {
  let component: TableProductProviderPolicyAdminComponent;
  let fixture: ComponentFixture<TableProductProviderPolicyAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableProductProviderPolicyAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableProductProviderPolicyAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
