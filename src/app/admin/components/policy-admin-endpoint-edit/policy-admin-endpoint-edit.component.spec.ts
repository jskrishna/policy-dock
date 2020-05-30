import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyAdminEndpointEditComponent } from './policy-admin-endpoint-edit.component';

describe('PolicyAdminEndpointEditComponent', () => {
  let component: PolicyAdminEndpointEditComponent;
  let fixture: ComponentFixture<PolicyAdminEndpointEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyAdminEndpointEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyAdminEndpointEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
