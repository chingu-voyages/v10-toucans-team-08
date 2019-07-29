import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.css']
})
export class Section4Component implements OnInit {
  p1 = '…identified new drug candidates in the fight against neuroblastoma – a childhood cancer.';
  p2 = '…discovered how nanotechnology could help provide clean water to millions.';
  p3 = '…discovered new compounds for harnessing solar power.';
  text = this.p1;
  widthInt = 0.1;
  color = '#D7AAFF';
  buttonHidden = true;



  constructor() { }

  ngOnInit() {
    setInterval(() => {
        this.widthInt += .1;
        if (this.widthInt > 33) {
          this.color = '#5596E6';
          this.text = this.p2;
        }
        if (this.widthInt > 66) {
          this.color = '#FDD500';
          this.text = this.p3;
        }
        if (this.widthInt > 99) {
          this.buttonHidden = false;
        }
    }, 10);
  }

  startAgain = function() {
    this.widthInt = 0.1;
    this.buttonHidden = true;
    this.color = '#D7AAFF';
    this.text = this.p1;
  };



}
