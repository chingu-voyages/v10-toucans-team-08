import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


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
  icon1 = true;
  icon2 = false;
  icon3 = false;
  icon4 = false;
   
  ngOnInit(): void {
  }

  titlechange = () => {
    if (this.state === 'hide') {
      if (this.title === this.title1) {
        this.title = this.title2;
        this.icon1 = false;
        this.icon2 = true;
      } else if (this.title === this.title2) {
        this.title = this.title3;
        this.icon2 = false;
        this.icon3 = true;
      } else if (this.title === this.title3) {
        this.title = this.title4;
        this.icon3 = false;
        this.icon4 = true;
      } else if (this.title === this.title4) {
        this.title = this.title1;
        this.icon4 = false;
        this.icon1 = true;
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
