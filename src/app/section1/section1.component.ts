import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css'],
  animations: [
    trigger('crossfade', [
        state('show', style({ opacity: 1 })),
        state('hide', style({ opacity: 0 })),
        transition('hide => show', animate('1s ease')),
        transition('show => hide', animate('1s ease'))
    ])]
})
export class Section1Component implements OnInit {
  state = 'show';
  title1 = ` What if you could<br> <b>study bacteria</b><br> while tweeting? `;
  title2 = ` What if you could help<br> <b>treat childhood cancer</b><br> while watching video? `;
  title3 = ` What if you could help<br> <b>cure Zika</b><br> while listening to music? `;
  title4 = ` What if you could help<br> <b>treat HIV/AIDS</b><br> while posting a status update? `;
  title = this.title1;
  icon1 = `<app-icon1 class="section-content__small-image-1"></app-icon1>`;
  icon2 = `<app-icon2 class="section-content__small-image-1"></app-icon2>`;
  icon3 = `<app-icon3 class="section-content__small-image-1"></app-icon3>`;
  icon4 = `<app-icon4 class="section-content__small-image-1"></app-icon4>`;
  icon = this.icon1;

  ngOnInit(): void {
  }

  titlechange = () => {
    if (this.state === 'hide') {
      if (this.title === this.title1) {
        this.title = this.title2;
        this.icon = this.icon2;
        console.log(this.icon);
      } else if (this.title === this.title2) {
        this.title = this.title3;
        this.icon = this.icon3;
        console.log(this.icon);
      } else if (this.title === this.title3) {
        this.title = this.title4;
        this.icon = this.icon4;
        console.log(this.icon);
      } else if (this.title === this.title4) {
        this.title = this.title1;
        this.icon = this.icon1;
        console.log(this.icon);
      }
    }
  }

  switch = () => {
    this.state = (this.state === 'show' ? 'hide' : 'show');
    setTimeout(this.titlechange, 1000);
  }

  constructor() {
    setInterval(this.switch, 3000);
  }
}
