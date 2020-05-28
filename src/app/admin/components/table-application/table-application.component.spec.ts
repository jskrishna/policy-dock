import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableApplicationComponent } from './table-application.component';

describe('TableApplicationComponent', () => {
  let component: TableApplicationComponent;
  let fixture: ComponentFixture<TableApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
