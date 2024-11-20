import { Component } from '@angular/core';
import { HeroBannerSectionComponent } from './components/hero-banner-section/hero-banner-section.component';
import { AdShopNowSectionComponent } from './components/ad-shop-now-section/ad-shop-now-section.component';
import { SponsorsSectionComponent } from './components/sponsors-section/sponsors-section.component';
import { ContactUsSectionComponent } from './components/contact-us-section/contact-us-section.component';
import { DownloadAppSectionComponent } from './components/download-app-section/download-app-section.component';
import { ShopCarouselSectionComponent } from './components/shop-carousel-section/shop-carousel-section.component';
import { BlogCarouselSectionComponent } from './components/blog-carousel-section/blog-carousel-section.component';
import { StandingSectionComponent } from './components/standing-section/standing-section.component';
import { AboutVideoSectionComponent } from './components/about-video-section/about-video-section.component';
import { ScheduleCarouselSectionComponent } from './components/schedule-carousel-section/schedule-carousel-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroBannerSectionComponent,
    AdShopNowSectionComponent,
    ScheduleCarouselSectionComponent,
    AboutVideoSectionComponent,
    StandingSectionComponent,
    BlogCarouselSectionComponent,
    ShopCarouselSectionComponent,
    DownloadAppSectionComponent,
    ContactUsSectionComponent,
    SponsorsSectionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
