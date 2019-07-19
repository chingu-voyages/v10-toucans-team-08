import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Icon4Component } from './icon4.component';

describe('Icon4Component', () => {
  let component: Icon4Component;
  let fixture: ComponentFixture<Icon4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Icon4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Icon4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
