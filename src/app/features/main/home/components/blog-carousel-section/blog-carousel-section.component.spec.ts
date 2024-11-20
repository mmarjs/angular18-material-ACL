import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCarouselSectionComponent } from './blog-carousel-section.component';

describe('BlogCarouselSectionComponent', () => {
  let component: BlogCarouselSectionComponent;
  let fixture: ComponentFixture<BlogCarouselSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogCarouselSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogCarouselSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
