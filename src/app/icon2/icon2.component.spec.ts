import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Icon2Component } from './icon2.component';

describe('Icon2Component', () => {
  let component: Icon2Component;
  let fixture: ComponentFixture<Icon2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Icon2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Icon2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
