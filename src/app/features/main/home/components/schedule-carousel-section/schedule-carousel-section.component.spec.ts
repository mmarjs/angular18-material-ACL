import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleCarouselSectionComponent } from './schedule-carousel-section.component';

describe('ScheduleCarouselSectionComponent', () => {
  let component: ScheduleCarouselSectionComponent;
  let fixture: ComponentFixture<ScheduleCarouselSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleCarouselSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleCarouselSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
