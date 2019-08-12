import {Component, HostListener, ViewChild} from '@angular/core';
import {Colors, PositionOfButton} from './scroll-section-btn/scroll-section-btn.component';
import { Section4Component } from './section4/section4.component';
import {debounce} from './decorators';
import {SubsectionId} from './section3/section3.component';

export enum SectionId {
  SECTIONONE = 'sectionOne',
  SECTIONTWO = 'sectionTwo',
  SECTIONTHREE = 'sectionThree',
  SECTIONFOUR = 'sectionFour',
  SECTIONFIVE = 'sectionFive',
  SECTIONSIX = 'sectionSix',
  SECTIONSEVEN = 'sectionSeventh',
  SECTIONEIGHT = 'sectionEight'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild(Section4Component, {static: false}) child;
  public sectionId = SectionId;
  public positionOfView: SectionId = SectionId.SECTIONONE;
  buttonColor: Colors = Colors.WHITE;
  positionButton: PositionOfButton = PositionOfButton.BOTTOM;
  buttonVisibleOnSection = true;
  private lastScrollPosition = 0;
  scrollValue = 0;
  public positionOfSubsectionThree: SubsectionId = SubsectionId.CHALLENGE;
  public subSectionEnum = SubsectionId;

  public statusOfButton(sectionId) {
    this.buttonColor = sectionId === 'sectionTwo'
    || sectionId === 'sectionSix'
    || sectionId === 'sectionSeven'
      ? Colors.BLACK : Colors.WHITE;
    this.buttonVisibleOnSection = !(sectionId === 'sectionThree' || sectionId === 'sectionEight');
  }

  public changePositionOfView(currentPosition: SectionId, goesDown: boolean) {
    switch (currentPosition) {
      case SectionId.SECTIONONE: {
        this.positionOfView = goesDown ? this.sectionId.SECTIONTWO : SectionId.SECTIONONE;
        break;
      }
      case SectionId.SECTIONTWO: {
        this.positionOfView = goesDown ? this.sectionId.SECTIONTHREE : SectionId.SECTIONONE;
        break;
      }
      case SectionId.SECTIONTHREE: {
        if (goesDown) {
          this.positionOfView = this.sectionId.SECTIONFOUR;
          this.child.initializeLoadingProgress();
        } else {
          this.positionOfView = this.sectionId.SECTIONTWO;
        }
        break;
      }
      case SectionId.SECTIONFOUR: {
        this.positionOfView = goesDown ? this.sectionId.SECTIONFOUR : SectionId.SECTIONTHREE;
        break;
      }
      default:
        this.positionOfView = SectionId.SECTIONONE;
    }
    this.statusOfButton(this.positionOfView);
  }

  public onClickToScrollDown() {
    this.scrollValue += 100;
    this.changePositionOfView(this.positionOfView, true);
  }

  @debounce(500)
  @HostListener('window:scroll')
  public scrollDown() {
    const currentScrollPosition = window.scrollY;
    const scrollToDown = (currentScrollPosition > this.lastScrollPosition);
    const scrollDelta = (currentScrollPosition - this.lastScrollPosition > 10)
      || (currentScrollPosition - this.lastScrollPosition < 10);
    if (this.positionOfView === this.sectionId.SECTIONTHREE) {
      if (this.positionOfSubsectionThree === this.subSectionEnum.CHALLENGE && scrollToDown) {
        this.positionOfSubsectionThree = this.subSectionEnum.SOLUTION;
      } else if (this.positionOfSubsectionThree === this.subSectionEnum.CHALLENGE && !scrollToDown) {
        this.scrollValue -= 100;
        this.positionOfView = this.sectionId.SECTIONTWO;
      } else if (this.positionOfSubsectionThree === SubsectionId.SOLUTION && scrollToDown) {
        this.positionOfSubsectionThree = this.subSectionEnum.IMPACT;
        this.buttonVisibleOnSection = true;
      } else if (this.positionOfSubsectionThree === SubsectionId.SOLUTION && !scrollToDown) {
        this.positionOfSubsectionThree = this.subSectionEnum.CHALLENGE;
      } else if (this.positionOfSubsectionThree === this.subSectionEnum.IMPACT && scrollToDown) {
        this.scrollValue += 100;
        this.positionOfView = this.sectionId.SECTIONFOUR;
      } else if (this.positionOfSubsectionThree === this.subSectionEnum.IMPACT && !scrollToDown) {
        this.positionOfSubsectionThree = this.subSectionEnum.SOLUTION;
      }
    } else if (this.positionOfView === this.sectionId.SECTIONFOUR && scrollToDown) {
      return;
    } else {
      if (scrollToDown && scrollDelta) {
        this.scrollValue += 100;
        this.changePositionOfView(this.positionOfView, scrollToDown);
      } else {
        this.scrollValue -= 100;
        this.changePositionOfView(this.positionOfView, scrollToDown);
      }
      this.lastScrollPosition = currentScrollPosition <= 0 ? 0 : currentScrollPosition;
    }
  }

  onClickToSubsection() {
    if (this.positionOfSubsectionThree === this.subSectionEnum.CHALLENGE) {
      this.positionOfSubsectionThree = this.subSectionEnum.SOLUTION;
    } else if (this.positionOfSubsectionThree === SubsectionId.SOLUTION) {
      this.buttonVisibleOnSection = true;
      this.positionOfSubsectionThree = this.subSectionEnum.IMPACT;
    }
  }
}
