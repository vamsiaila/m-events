import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderminiComponent } from './slidermini.component';

describe('SliderminiComponent', () => {
  let component: SliderminiComponent;
  let fixture: ComponentFixture<SliderminiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderminiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderminiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
