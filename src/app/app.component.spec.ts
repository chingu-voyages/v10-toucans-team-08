import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {Colors, ScrollSectionBtnComponent} from './scroll-section-btn/scroll-section-btn.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
        ScrollSectionBtnComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]

    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  describe('The button status for color', () => {
    it('should be initialised with white color', () => {
      expect(app.buttonColor).toBe(Colors.WHITE);
    });
  });
});
