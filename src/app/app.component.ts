import {Component} from '@angular/core';
import {Colors, PositionOfButton} from './scroll-section-btn/scroll-section-btn.component';

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

  public statusOfButton(sectionId) {
    this.buttonColor = sectionId === 'sectionTwo' || sectionId === 'sectionSix' || sectionId === 'sectionSeven' ? Colors.BLACK : Colors.WHITE;
    this.buttonVisibleOnSection = !(sectionId === 'sectionEight');
  }

  public scrollDown() {
    switch (this.positionOfView) {
      case SectionId.SECTIONONE: {
        this.positionOfView = this.sectionId.SECTIONTWO;
        break;
      }
      case SectionId.SECTIONTWO: {
        this.positionOfView = this.sectionId.SECTIONTHREE;
        break;
      }
    }
    document.getElementById(this.positionOfView).scrollIntoView();
    this.statusOfButton(this.positionOfView);
  }
}
