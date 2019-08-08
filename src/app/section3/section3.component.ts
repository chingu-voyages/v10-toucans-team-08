import {Component, HostListener} from '@angular/core';
import {faMountain} from '@fortawesome/free-solid-svg-icons/faMountain';
import {faCompass} from '@fortawesome/free-regular-svg-icons/faCompass';
import {faFlag} from '@fortawesome/free-regular-svg-icons';
import {faArrowDown} from '@fortawesome/free-solid-svg-icons/faArrowDown';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.css']
})
export class Section3Component {
  public iconMountain = faMountain;
  public iconCompass = faCompass;
  public iconFlag = faFlag;
  public iconArrowDown = faArrowDown;
  public isChallengeSubsectionHidden = false;
  public isSolutionSubsectionHidden = true;
  public isImpactSubsectionHidden = true;

  public sectionVisible(sectionName: string) {
    switch (sectionName) {
      case 'challenge': {
        this.isChallengeSubsectionHidden = !this.isChallengeSubsectionHidden;
        this.isSolutionSubsectionHidden = true;
        this.isImpactSubsectionHidden = true;
        break;
      }
      case 'solution': {
        this.isSolutionSubsectionHidden = !this.isSolutionSubsectionHidden;
        this.isChallengeSubsectionHidden = true;
        this.isImpactSubsectionHidden = true;
        break;
      }
      case 'impact': {
        this.isImpactSubsectionHidden = !this.isImpactSubsectionHidden;
        this.isChallengeSubsectionHidden = true;
        this.isSolutionSubsectionHidden = true;
        break;
      }
    }
  }
}
