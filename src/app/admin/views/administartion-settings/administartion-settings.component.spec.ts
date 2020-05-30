import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministartionSettingsComponent } from './administartion-settings.component';

describe('AdministartionSettingsComponent', () => {
  let component: AdministartionSettingsComponent;
  let fixture: ComponentFixture<AdministartionSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministartionSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministartionSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
