import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyAdminEndpointComponent } from './policy-admin-endpoint.component';

describe('PolicyAdminEndpointComponent', () => {
  let component: PolicyAdminEndpointComponent;
  let fixture: ComponentFixture<PolicyAdminEndpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyAdminEndpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyAdminEndpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
