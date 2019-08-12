import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Section1Component} from './section1.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('Section1Component', () => {
  let component: Section1Component;
  let fixture: ComponentFixture<Section1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: [Section1Component],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Section1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create section1 component', () => {
    expect(component).toBeTruthy();
  });
});
