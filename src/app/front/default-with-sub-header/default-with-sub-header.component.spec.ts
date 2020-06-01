import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultWithSubHeaderComponent } from './default-with-sub-header.component';

describe('DefaultWithSubHeaderComponent', () => {
  let component: DefaultWithSubHeaderComponent;
  let fixture: ComponentFixture<DefaultWithSubHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultWithSubHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultWithSubHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
