import {Component, HostListener, ViewChild} from '@angular/core';
import {Colors, PositionOfButton} from './scroll-section-btn/scroll-section-btn.component';
import {Section4Component} from './section4/section4.component';
import {debounce} from './decorators';
import {SubsectionId} from './section3/section3.component';

export enum SectionId {
  SECTIONONE = 'sectionOne',
  SECTIONTWO = 'sectionTwo',
  SECTIONTHREE = 'sectionThree',
  SECTIONFOUR = 'sectionFour'
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
  public buttonColor: Colors = Colors.WHITE;
  public positionButton: PositionOfButton = PositionOfButton.BOTTOM;
  public buttonVisibleOnSection = true;
  public scrollValue = 0;
  public positionOfSubsectionThree: SubsectionId = SubsectionId.CHALLENGE;
  public subSectionEnum = SubsectionId;

  private lastScrollPosition = 0;

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
        this.positionOfView = goesDown ? this.sectionId.SECTIONTWO : this.sectionId.SECTIONONE;
        break;
      }
      case SectionId.SECTIONTWO: {
        this.positionOfView = goesDown ? this.sectionId.SECTIONTHREE : this.sectionId.SECTIONONE;
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
        this.positionOfView = goesDown ? this.sectionId.SECTIONFOUR : this.sectionId.SECTIONTHREE;
        break;
      }
      default:
        this.positionOfView = SectionId.SECTIONONE;
    }
    this.statusOfButton(this.positionOfView);
  }

  public onclickToNavigate(selectedSection: SectionId) {
    document.getElementById(selectedSection).scrollIntoView({block: 'center', behavior: 'smooth'});
    this.positionOfView = selectedSection;
    this.statusOfButton(selectedSection);
  }

  @debounce(1000)
  @HostListener('window:scroll')
  public scrollDown() {
    if (window.scrollY === 10) {
      return;
    }
    const scrollDOWN: boolean = this.getScrollDirection();

    if (this.positionOfView === this.sectionId.SECTIONTHREE) {
      this.leaveSectionThree(scrollDOWN);
      this.sectionThreeSubSectionScrolling(scrollDOWN, this.positionOfSubsectionThree);
    } else {
      this.scrollView(scrollDOWN);
      this.changePositionOfView(this.positionOfView, scrollDOWN);
    }
    this.resetScroll();
  }

  public onClickToScrollDown() {
    if (this.positionOfView === this.sectionId.SECTIONFOUR) {
      return;
    } else {
      this.scrollValue += 100;
      this.changePositionOfView(this.positionOfView, true);
    }
  }

  public leaveSectionThree(scrollDOWN: boolean) {
    if (this.positionOfSubsectionThree === this.subSectionEnum.IMPACT && scrollDOWN) {
      this.scrollView(scrollDOWN);
      this.changePositionOfView(this.positionOfView, scrollDOWN);
    } else if (this.positionOfSubsectionThree === this.subSectionEnum.CHALLENGE && !scrollDOWN) {
      this.scrollView(scrollDOWN);
      this.changePositionOfView(this.positionOfView, scrollDOWN);
    }
  }

  private resetScroll() {
    window.scrollTo(0, 10);
    this.lastScrollPosition = 10;
  }

  public scrollView(scrollDOWN: boolean) {
    if (!scrollDOWN && this.scrollValue === 0) {
      return;
    }

    if (scrollDOWN && this.scrollValue === 300) {
      return;
    }

    if (scrollDOWN) {
      this.scrollValue += 100;
    } else {
      this.scrollValue -= 100;
    }
  }

  private getScrollDirection(): boolean {
    const boundingClientRect = window.document.body.getBoundingClientRect();
    const scrollDown = boundingClientRect.top < -10;
    this.lastScrollPosition = boundingClientRect.top;
    return scrollDown;
  }

  public sectionThreeSubSectionScrolling(scrollDirectionDown, subSectionId: SubsectionId) {
    if (scrollDirectionDown) {
      if (subSectionId === this.subSectionEnum.CHALLENGE) {
        this.positionOfSubsectionThree = this.subSectionEnum.SOLUTION;
      } else if (subSectionId === this.subSectionEnum.SOLUTION) {
        this.positionOfSubsectionThree = this.subSectionEnum.IMPACT;
        this.buttonVisibleOnSection = true;
      }
    } else {
      if (subSectionId === this.subSectionEnum.IMPACT) {
        this.positionOfSubsectionThree = this.subSectionEnum.SOLUTION;
        this.buttonVisibleOnSection = false;
      } else if (subSectionId === this.subSectionEnum.SOLUTION) {
        this.positionOfSubsectionThree = this.subSectionEnum.CHALLENGE;
      }
    }
  }

  onClickToSubsection() {
    this.sectionThreeSubSectionScrolling(true, this.positionOfSubsectionThree);
  }
}
