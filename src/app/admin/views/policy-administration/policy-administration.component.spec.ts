import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyAdministrationComponent } from './policy-administration.component';

describe('PolicyAdministrationComponent', () => {
  let component: PolicyAdministrationComponent;
  let fixture: ComponentFixture<PolicyAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
