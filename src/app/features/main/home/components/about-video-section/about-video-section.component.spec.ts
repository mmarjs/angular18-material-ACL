import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutVideoSectionComponent } from './about-video-section.component';

describe('AboutVideoSectionComponent', () => {
  let component: AboutVideoSectionComponent;
  let fixture: ComponentFixture<AboutVideoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutVideoSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutVideoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
