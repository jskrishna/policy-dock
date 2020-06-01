import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEndpointsComponent } from './home-endpoints.component';

describe('HomeEndpointsComponent', () => {
  let component: HomeEndpointsComponent;
  let fixture: ComponentFixture<HomeEndpointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEndpointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEndpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
