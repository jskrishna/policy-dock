import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePolicyScheduleComponent } from './table-policy-schedule.component';

describe('TablePolicyScheduleComponent', () => {
  let component: TablePolicyScheduleComponent;
  let fixture: ComponentFixture<TablePolicyScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePolicyScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePolicyScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
