import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ScrollSectionBtnComponent} from './scroll-section-btn.component';
import {faArrowAltCircleDown} from '@fortawesome/free-regular-svg-icons';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('ScrollSectionBtnComponent', () => {
  let component: ScrollSectionBtnComponent;
  let fixture: ComponentFixture<ScrollSectionBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollSectionBtnComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollSectionBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create scroll-section-button component', () => {
    expect(component).toBeTruthy();
  });

  it('should be contain a fontawesome icon', () => {
    expect(component.iconButton).toBe(faArrowAltCircleDown);
  });
});
