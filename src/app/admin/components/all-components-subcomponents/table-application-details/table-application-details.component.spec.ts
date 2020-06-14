import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableApplicationDetailsComponent } from './table-application-details.component';

describe('TableApplicationDetailsComponent', () => {
  let component: TableApplicationDetailsComponent;
  let fixture: ComponentFixture<TableApplicationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableApplicationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableApplicationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
