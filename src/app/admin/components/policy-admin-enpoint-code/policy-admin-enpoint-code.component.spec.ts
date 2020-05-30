import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyAdminEnpointCodeComponent } from './policy-admin-enpoint-code.component';

describe('PolicyAdminEnpointCodeComponent', () => {
  let component: PolicyAdminEnpointCodeComponent;
  let fixture: ComponentFixture<PolicyAdminEnpointCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyAdminEnpointCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyAdminEnpointCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
