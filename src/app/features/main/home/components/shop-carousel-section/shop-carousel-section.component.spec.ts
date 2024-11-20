import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCarouselSectionComponent } from './shop-carousel-section.component';

describe('ShopCarouselSectionComponent', () => {
  let component: ShopCarouselSectionComponent;
  let fixture: ComponentFixture<ShopCarouselSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopCarouselSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopCarouselSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
