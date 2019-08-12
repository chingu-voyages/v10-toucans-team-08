import {Component, EventEmitter, Input, Output} from '@angular/core';
import {faArrowAltCircleDown} from '@fortawesome/free-regular-svg-icons';

export enum Colors {
  WHITE = 'white',
  BLACK = 'black',
}

export enum PositionOfButton {
  TOP = 'top',
  BOTTOM = 'bottom'
}

@Component({
  selector: 'app-scroll-section-btn',
  templateUrl: './scroll-section-btn.component.html',
  styleUrls: ['./scroll-section-btn.component.css']
})
export class ScrollSectionBtnComponent {
  @Input() public color: Colors;
  @Input() public positionButton: PositionOfButton;
  @Input() public visible: boolean;
  iconButton = faArrowAltCircleDown;
  @Output() clicked: EventEmitter<any> = new EventEmitter();

  onClicked() {
    this.clicked.emit();
  }
}
