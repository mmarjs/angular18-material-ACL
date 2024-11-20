import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBannerSectionComponent } from './hero-banner-section.component';

describe('HeroBannerSectionComponent', () => {
  let component: HeroBannerSectionComponent;
  let fixture: ComponentFixture<HeroBannerSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroBannerSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroBannerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
