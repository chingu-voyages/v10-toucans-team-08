import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuComponent } from './main-menu.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

describe('MainMenuComponent', () => {
  let component: MainMenuComponent;
  let fixture: ComponentFixture<MainMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMenuComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create main-menu component', () => {
    expect(component).toBeTruthy();
  });

  it('should be contain a fontawesome font', () => {
    expect(component.faTimes).toBe(faTimes);
  });
});
