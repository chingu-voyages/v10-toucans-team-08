import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Icon3Component } from './icon3.component';

describe('Icon3Component', () => {
  let component: Icon3Component;
  let fixture: ComponentFixture<Icon3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Icon3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Icon3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
