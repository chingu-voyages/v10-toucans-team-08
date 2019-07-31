import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Section3SubsectionComponent } from './section3-subsection.component';

describe('Section3SubsectionComponent', () => {
  let component: Section3SubsectionComponent;
  let fixture: ComponentFixture<Section3SubsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Section3SubsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Section3SubsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
