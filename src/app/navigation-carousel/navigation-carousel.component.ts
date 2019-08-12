import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-carousel',
  templateUrl: './navigation-carousel.component.html',
  styleUrls: ['./navigation-carousel.component.css']
})
export class NavigationCarouselComponent implements OnInit {

  active = 1;
  activeNav(elementNumber) {
    this.active = elementNumber;
  }
  constructor() { }

  ngOnInit() {
  }

}
