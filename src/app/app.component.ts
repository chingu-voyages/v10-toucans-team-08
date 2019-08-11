import {Component, OnInit, ViewChild} from '@angular/core';
import {Colors, PositionOfButton} from './scroll-section-btn/scroll-section-btn.component';
import { Section4Component } from './section4/section4.component';

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

export class AppComponent implements OnInit {
  @ViewChild(Section4Component, {static: false}) child;
  public sectionId = SectionId;
  public positionOfView: SectionId = SectionId.SECTIONONE;
  buttonColor: Colors = Colors.WHITE;
  positionButton: PositionOfButton = PositionOfButton.BOTTOM;
  buttonVisibleOnSection = true;
  ngOnInit() {
  }

  public statusOfButton(sectionId) {
    // tslint:disable-next-line: max-line-length
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
      case SectionId.SECTIONTHREE: {
        this.positionOfView = this.sectionId.SECTIONFOUR;
        this.child.initializeLoadingProgress();
        break;
      }
    }
    document.getElementById(this.positionOfView).scrollIntoView();
    this.statusOfButton(this.positionOfView);
  }
}
