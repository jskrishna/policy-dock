import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAvailableEndpointsComponent } from './table-available-endpoints.component';

describe('TableAvailableEndpointsComponent', () => {
  let component: TableAvailableEndpointsComponent;
  let fixture: ComponentFixture<TableAvailableEndpointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableAvailableEndpointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAvailableEndpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
