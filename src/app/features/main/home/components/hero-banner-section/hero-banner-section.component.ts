import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-hero-banner-section',
  standalone: true,
  imports: [
    MatCard,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './hero-banner-section.component.html',
  styleUrl: './hero-banner-section.component.scss'
})
export class HeroBannerSectionComponent {

}
