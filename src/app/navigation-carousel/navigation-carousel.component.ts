import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SectionId} from '../app.component';

@Component({
  selector: 'app-navigation-carousel',
  templateUrl: './navigation-carousel.component.html',
  styleUrls: ['./navigation-carousel.component.css']
})
export class NavigationCarouselComponent {
  @Input() public navigationId: SectionId;
  public sectionIdEnum = SectionId;
  @Output() clickedToNavigate: EventEmitter<SectionId> = new EventEmitter ();

  navigateToSection(navItem: SectionId) {
    this.clickedToNavigate.emit(navItem);
  }
}
