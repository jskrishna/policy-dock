import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCurrentPolicyComponent } from './table-current-policy.component';

describe('TableCurrentPolicyComponent', () => {
  let component: TableCurrentPolicyComponent;
  let fixture: ComponentFixture<TableCurrentPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCurrentPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCurrentPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
