import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdShopNowSectionComponent } from './ad-shop-now-section.component';

describe('AdShopNowSectionComponent', () => {
  let component: AdShopNowSectionComponent;
  let fixture: ComponentFixture<AdShopNowSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdShopNowSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdShopNowSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
