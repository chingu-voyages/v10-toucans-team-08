import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSubsectionComponent } from './header-subsection.component';

describe('HeaderSubsectionComponent', () => {
  let component: HeaderSubsectionComponent;
  let fixture: ComponentFixture<HeaderSubsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSubsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSubsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
