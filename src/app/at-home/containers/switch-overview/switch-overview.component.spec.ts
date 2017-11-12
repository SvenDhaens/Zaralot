import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchOverviewComponent } from './switch-overview.component';

describe('SwitchOverviewComponent', () => {
  let component: SwitchOverviewComponent;
  let fixture: ComponentFixture<SwitchOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
