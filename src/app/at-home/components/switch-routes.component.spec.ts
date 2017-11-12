import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchRoutesComponent } from './switch-routes.component';

describe('SwitchRoutesComponent', () => {
  let component: SwitchRoutesComponent;
  let fixture: ComponentFixture<SwitchRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchRoutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
