import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtHomeContainer } from './at-home-container';

describe('AtHomeContainer', () => {
  let component: AtHomeContainer;
  let fixture: ComponentFixture<AtHomeContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtHomeContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtHomeContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
