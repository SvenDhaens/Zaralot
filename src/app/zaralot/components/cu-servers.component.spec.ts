import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuServersComponent } from './cu-servers.component';

describe('CuServersComponent', () => {
  let component: CuServersComponent;
  let fixture: ComponentFixture<CuServersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuServersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
