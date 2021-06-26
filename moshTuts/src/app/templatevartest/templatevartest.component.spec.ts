import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatevartestComponent } from './templatevartest.component';

describe('TemplatevartestComponent', () => {
  let component: TemplatevartestComponent;
  let fixture: ComponentFixture<TemplatevartestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatevartestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatevartestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
