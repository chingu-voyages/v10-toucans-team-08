import {Component, EventEmitter, Input, Output} from '@angular/core';
import {faMountain} from '@fortawesome/free-solid-svg-icons/faMountain';
import {faCompass} from '@fortawesome/free-regular-svg-icons/faCompass';
import {faFlag} from '@fortawesome/free-regular-svg-icons';
import {faArrowDown} from '@fortawesome/free-solid-svg-icons/faArrowDown';

export enum SubsectionId {
  CHALLENGE = 'challenge',
  SOLUTION = 'solution',
  IMPACT = 'impact'
}

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
  @Input() public subsectionId: SubsectionId;
  public enumValue = SubsectionId;
  @Output() clicked: EventEmitter<any> = new EventEmitter();

  public sectionVisible() {
    this.clicked.emit();
  }
}
