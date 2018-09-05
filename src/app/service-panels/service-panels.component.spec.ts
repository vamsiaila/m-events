import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePanelsComponent } from './service-panels.component';

describe('ServicePanelsComponent', () => {
  let component: ServicePanelsComponent;
  let fixture: ComponentFixture<ServicePanelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicePanelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicePanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
