import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent, SectionId} from './app.component';
import {Colors, ScrollSectionBtnComponent} from './scroll-section-btn/scroll-section-btn.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {SubsectionId} from './section3/section3.component';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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

  describe('The button status for color and visibility', () => {
    it('should be initialised with white color', () => {
      expect(app.buttonColor).toBe(Colors.WHITE);
    });
    it('should be visible on SubsectionId.IMPACT of sectionThree', () => {
      app.positionOfSubsectionThree = SubsectionId.IMPACT;
      expect(app.buttonVisibleOnSection).toBe(true);
    });
  });

  describe('The position of view for app with onClickToScrollDown', () => {
    it('Position of view should be initialised with section one', () => {
      expect(app.positionOfView).toBe(SectionId.SECTIONONE);
    });

    it('should change from SectionOne to SectionTwo with scrollDown', () => {
      app.positionOfView = SectionId.SECTIONONE;
      app.onClickToScrollDown();
      expect(app.positionOfView).toBe(SectionId.SECTIONTWO);
    });

    it('should change from sectionTwo to SectionThree with scrollDown', () => {
      app.positionOfView = SectionId.SECTIONTWO;
      app.onClickToScrollDown();
      expect(app.positionOfView).toBe(SectionId.SECTIONTHREE);
    });

    it('should change from sectionThree to sectionFour with scrollDown', () => {
      app.positionOfView = SectionId.SECTIONTHREE;
      app.onClickToScrollDown();
      expect(app.positionOfView).toBe(SectionId.SECTIONFOUR);
    });

    it('should stay on sectionFour with scrollDown', () => {
      app.positionOfView = SectionId.SECTIONFOUR;
      app.onClickToScrollDown();
      expect(app.positionOfView).toBe(SectionId.SECTIONFOUR);
    });
  });

  describe('The position of view for app with scrollView', () => {
    it('should increase by one hundred if scrollDown is true', () => {
      app.scrollValue = 0;
      app.scrollView(true);
      expect(app.scrollValue).toBe(100);
    });

    it(' should decrease by one hundred if scrollDown is false', () => {
      app.scrollValue = 0;
      app.scrollView(false);
      expect(app.scrollValue).toBe(0);
    });

    it(' should not go over 300', () => {
      app.scrollValue = 300;
      app.scrollView(true);
      expect(app.scrollValue).toBe(300);
    });
  });

  describe('sectionThreeSubSectionScrolling:', () => {
    it('should change positionOfSubsectionThree from CHALLENGE to SOLUTION', () => {
      app.positionOfSubsectionThree = SubsectionId.CHALLENGE;
      app.sectionThreeSubSectionScrolling(true, SubsectionId.CHALLENGE);
      expect(app.positionOfSubsectionThree).toBe(SubsectionId.SOLUTION);
    });

    it('should change positionOfSubsectionThree from SOLUTION to IMPACT', () => {
      app.positionOfSubsectionThree = SubsectionId.SOLUTION;
      app.sectionThreeSubSectionScrolling(true, SubsectionId.SOLUTION);
      expect(app.positionOfSubsectionThree).toBe(SubsectionId.IMPACT);
    });

    it('should change positionOfSubsectionThree from IMPACT to SOLUTION', () => {
      app.positionOfSubsectionThree = SubsectionId.IMPACT;
      app.sectionThreeSubSectionScrolling(false, SubsectionId.IMPACT);
      expect(app.positionOfSubsectionThree).toBe(SubsectionId.SOLUTION);
    });

    it('should change positionOfSubsectionThree from SOLUTION to CHALLENGE', () => {
      app.positionOfSubsectionThree = SubsectionId.SOLUTION;
      app.sectionThreeSubSectionScrolling(false, SubsectionId.SOLUTION);
      expect(app.positionOfSubsectionThree).toBe(SubsectionId.CHALLENGE);
    });
  });

  describe('leaveSectionThree', () => {
    it('should change from subsection IMPACT to section Four with scrollDown', () => {
      app.positionOfView = SectionId.SECTIONTHREE;
      app.positionOfSubsectionThree = SubsectionId.IMPACT;
      app.leaveSectionThree(true);
      expect(app.positionOfView).toBe(SectionId.SECTIONFOUR);
    });

    it('should change from subsection CHALLENGE to section Two with scrollDown', () => {
      app.positionOfView = SectionId.SECTIONTHREE;
      app.positionOfSubsectionThree = SubsectionId.CHALLENGE;
      app.leaveSectionThree(false);
      expect(app.positionOfView).toBe(SectionId.SECTIONTWO);
    });
  });

  describe('scrollDown', () => {
    it('should change from sectionTwo to sectionThree and stay on Subsection CHALLENGE', () => {
      app.positionOfView = SectionId.SECTIONTWO;
      app.scrollDown();
      expect(app.positionOfSubsectionThree).toBe(SubsectionId.CHALLENGE);

    });
  });
});
