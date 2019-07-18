import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css'],
  animations: [
    trigger('crossfade', [
        state('show', style({ display: 'initial' })),
        state('hide', style({ display: 'none' })),
        transition('hide <=> show', animate('1s ease-in')),
    ])]
})
export class Section1Component implements OnInit {

  state1 = 'show';
  state2 = 'hide';
  state3 = 'hide';
  state4 = 'hide';

  constructor() { }

  ngOnInit() {
  }

  switch = () => {
    if (this.state1 === 'show') {
      this.state1 = 'hide';
      this.state2 = 'show';
      this.state3 = 'hide';
      this.state4 = 'hide';
    }
    if (this.state2 === 'show') {
      this.state1 = 'hide';
      this.state2 = 'hide';
      this.state3 = 'show';
      this.state4 = 'hide';
    }
    if (this.state3 === 'show') {
      this.state1 = 'hide';
      this.state2 = 'hide';
      this.state3 = 'hide';
      this.state4 = 'show';
    }
    if (this.state4 === 'show') {
      this.state1 = 'show';
      this.state2 = 'hide';
      this.state3 = 'hide';
      this.state4 = 'hide';
    }
  }
}
