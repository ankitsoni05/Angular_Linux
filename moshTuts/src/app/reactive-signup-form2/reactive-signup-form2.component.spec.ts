import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveSignupForm2Component } from './reactive-signup-form2.component';

describe('ReactiveSignupForm2Component', () => {
  let component: ReactiveSignupForm2Component;
  let fixture: ComponentFixture<ReactiveSignupForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveSignupForm2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveSignupForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
