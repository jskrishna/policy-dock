import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPoliciesComponent } from './current-policies.component';

describe('CurrentPoliciesComponent', () => {
  let component: CurrentPoliciesComponent;
  let fixture: ComponentFixture<CurrentPoliciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentPoliciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
