import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Icon1Component } from './icon1.component';

describe('Icon1Component', () => {
  let component: Icon1Component;
  let fixture: ComponentFixture<Icon1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Icon1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Icon1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
