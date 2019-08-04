import {Component, Input} from '@angular/core';
import {faMountain} from '@fortawesome/free-solid-svg-icons/faMountain';
import {faFlag} from '@fortawesome/free-regular-svg-icons';
import {faCompass} from '@fortawesome/free-regular-svg-icons/faCompass';


@Component({
  selector: 'app-section3-subsection',
  templateUrl: './section3-subsection.component.html',
  styleUrls: ['./section3-subsection.component.css']
})
export class Section3SubsectionComponent {
  @Input() sectionPosition = 0;

  public iconMountain = faMountain;
  public iconCompass = faCompass;
  public iconFlag = faFlag;


}
