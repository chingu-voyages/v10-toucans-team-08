import {Component} from '@angular/core';
import {Colors, PositionOfButton} from './scroll-section-btn/scroll-section-btn.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonColor: Colors = Colors.WHITE;
  positionButton: PositionOfButton = PositionOfButton.BOTTOM;
  buttonVisibleOnSection = true;

  /*This click event (statusOfButton) should be embedded in the app.component.html - sections,
   so that we can change the status of button depend on the section number*/
  /*public statusOfButton(currentPos: number) {
    this.buttonColor = currentPos === 2 || currentPos === 6 || currentPos === 7 ? Colors.BLACK : Colors.WHITE;
    this.buttonVisibleOnSection = !(currentPos === 3 || currentPos === 8);
  }*/
}
