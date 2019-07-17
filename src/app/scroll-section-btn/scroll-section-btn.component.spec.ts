import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollSectionBtnComponent } from './scroll-section-btn.component';

describe('ScrollSectionBtnComponent', () => {
  let component: ScrollSectionBtnComponent;
  let fixture: ComponentFixture<ScrollSectionBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollSectionBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollSectionBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
