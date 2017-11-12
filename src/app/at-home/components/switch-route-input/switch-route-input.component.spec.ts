import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchRouteInputComponent } from './switch-route-input.component';

describe('SwitchRouteInputComponent', () => {
  let component: SwitchRouteInputComponent;
  let fixture: ComponentFixture<SwitchRouteInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchRouteInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchRouteInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
