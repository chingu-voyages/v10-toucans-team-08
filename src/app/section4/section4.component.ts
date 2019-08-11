import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.css']
})

// enum ImageUrl {
//   IMAGEONE = 'url(/assets/background-section4-1.jpg)',
//   IMAGETWO = 'url(/assets/background-section4-2.jpg)',
//   IMAGETHREE = 'url(/assets/background-section4-3.jpg)'
// }

export class Section4Component implements OnInit {
  p1 = '…identified new drug candidates in the fight against neuroblastoma – a childhood&nbsp;cancer.';
  p2 = '…discovered how nanotechnology could help provide clean water to&nbsp;millions.';
  p3 = '…discovered new compounds for harnessing solar&nbsp;power.';
  text = this.p1;
  widthInt = 0.1;
  color = '#D7AAFF';
  buttonHidden = true;
  backgroundUrl1 = 'url(/assets/background-section4-1.jpg)';
  backgroundUrl2 = 'url(/assets/background-section4-2.jpg)';
  backgroundUrl3 = 'url(/assets/background-section4-3.jpg)';
  backgroundUrl = this.backgroundUrl1;
  // @Input() imageUrl = ImageUrl;


  constructor() { }

  ngOnInit() {
    // this.initializeLoadingProgress();
  }

   initializeLoadingProgress() {
    setInterval(() => {
      this.widthInt += .1;
      if (this.widthInt > 33) {
        this.color = '#5596E6';
        this.text = this.p2;
        this.backgroundUrl = this.backgroundUrl2;
      }
      if (this.widthInt > 66) {
        this.color = '#FDD500';
        this.text = this.p3;
        this.backgroundUrl = this.backgroundUrl3;
      }
      if (this.widthInt > 99) {
        this.buttonHidden = false;
      }
    }, 10);
  }
  startAgain = () => {
    this.widthInt = 0.1;
    this.buttonHidden = true;
    this.color = '#D7AAFF';
    this.text = this.p1;
    this.backgroundUrl = this.backgroundUrl1;
  }
}
