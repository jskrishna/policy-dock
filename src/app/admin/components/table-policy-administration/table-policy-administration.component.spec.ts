import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePolicyAdministrationComponent } from './table-policy-administration.component';

describe('TablePolicyAdministrationComponent', () => {
  let component: TablePolicyAdministrationComponent;
  let fixture: ComponentFixture<TablePolicyAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePolicyAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePolicyAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
