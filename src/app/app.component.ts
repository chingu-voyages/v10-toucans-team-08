import {Component, HostListener} from '@angular/core';
import {Colors, PositionOfButton} from './scroll-section-btn/scroll-section-btn.component';
import {debounce} from './decorators';

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

  public statusOfButton(sectionId) {
    this.buttonColor = sectionId === 'sectionTwo'
    || sectionId === 'sectionSix'
    || sectionId === 'sectionSeven'
      ? Colors.BLACK : Colors.WHITE;
    this.buttonVisibleOnSection = !(sectionId === 'sectionEight');
  }

  public changePositionOfView(currentPosition: SectionId, goesDown: boolean) {
    switch (currentPosition) {
      case SectionId.SECTIONONE: {
        this.positionOfView = goesDown ? this.sectionId.SECTIONTWO : currentPosition;
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
      default:
        this.positionOfView = SectionId.SECTIONONE;
    }
    this.statusOfButton(this.positionOfView);
  }


  public onClickToScrollDown() {
    this.changePositionOfView(this.positionOfView, true);
    this.scrollValue += 100;
  }

  @debounce()
  @HostListener('window:scroll')
  public scrollDown() {
    const currentScrollPosition = window.scrollY;
    const scrollToDown = (currentScrollPosition > this.lastScrollPosition);
    const scrollDelta = (currentScrollPosition - this.lastScrollPosition > 10)
      || (currentScrollPosition - this.lastScrollPosition < 10);
    if (scrollToDown && scrollDelta) {
      this.changePositionOfView(this.positionOfView, scrollToDown);
      this.scrollValue += 100;
    } else {
      this.changePositionOfView(this.positionOfView, scrollToDown);
      this.scrollValue -= 100;
    }
    this.lastScrollPosition = currentScrollPosition <= 0 ? 0 : currentScrollPosition;
  }
}
