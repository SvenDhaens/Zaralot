import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamelotContainer } from './camelot-container';

describe('CamelotContainer', () => {
  let component: CamelotContainer;
  let fixture: ComponentFixture<CamelotContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamelotContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamelotContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
