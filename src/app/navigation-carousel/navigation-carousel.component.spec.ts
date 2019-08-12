import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationCarouselComponent } from './navigation-carousel.component';

describe('NavigationCarouselComponent', () => {
  let component: NavigationCarouselComponent;
  let fixture: ComponentFixture<NavigationCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
