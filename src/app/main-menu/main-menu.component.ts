import { Component, OnInit } from '@angular/core';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  faTimes = faTimes;

  constructor() {
  }

  ngOnInit() {
  }
}
