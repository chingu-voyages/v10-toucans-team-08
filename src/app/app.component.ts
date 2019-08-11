import {Component, HostListener} from '@angular/core';
import {Colors, PositionOfButton} from './scroll-section-btn/scroll-section-btn.component';
import {debounce} from './decorators';
import {SubsectionId} from './section3/section3.component';

enum SectionId {
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
        this.positionOfView = goesDown ? this.sectionId.SECTIONFOUR : SectionId.SECTIONTWO;
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
        this.positionOfView = this.sectionId.SECTIONTWO;
        this.scrollValue -= 100;
      } else if (this.positionOfSubsectionThree === SubsectionId.SOLUTION && scrollToDown) {
        this.positionOfSubsectionThree = this.subSectionEnum.IMPACT;
        this.buttonVisibleOnSection = true;
      } else if (this.positionOfSubsectionThree === SubsectionId.SOLUTION && !scrollToDown) {
        this.positionOfSubsectionThree = this.subSectionEnum.CHALLENGE;
      } else if (this.positionOfSubsectionThree === this.subSectionEnum.IMPACT && scrollToDown) {
        this.positionOfView = this.sectionId.SECTIONFOUR;
        this.scrollValue += 100;
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
      this.positionOfSubsectionThree = this.subSectionEnum.IMPACT;
      this.buttonVisibleOnSection = true;
    }
  }
}
