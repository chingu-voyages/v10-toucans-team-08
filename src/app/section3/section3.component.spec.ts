import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Section3Component} from './section3.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {faMountain} from '@fortawesome/free-solid-svg-icons/faMountain';
import {faCompass} from '@fortawesome/free-regular-svg-icons/faCompass';
import {faFlag} from '@fortawesome/free-regular-svg-icons';
import {faArrowDown} from '@fortawesome/free-solid-svg-icons/faArrowDown';

describe('Section3Component', () => {
  let component: Section3Component;
  let fixture: ComponentFixture<Section3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Section3Component],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Section3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create app-section3', () => {
    expect(component).toBeTruthy();
  });
  it('should contain mountain icon', () => {
    expect(component.iconMountain).toBe(faMountain);
  });
  it('should contain compass icon', () => {
    expect(component.iconCompass).toBe(faCompass);
  });
  it('should contain flag icon', () => {
    expect(component.iconFlag).toBe(faFlag);
  });
  it('should contain arrow-down icon', () => {
    expect(component.iconArrowDown).toBe(faArrowDown);
  });
});
