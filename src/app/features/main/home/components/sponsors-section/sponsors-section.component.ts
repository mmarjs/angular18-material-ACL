import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-sponsors-section',
  standalone: true,
  imports: [
    MatCard
  ],
  templateUrl: './sponsors-section.component.html',
  styleUrl: './sponsors-section.component.scss'
})
export class SponsorsSectionComponent {
  sponsors: string[];

  constructor() {
    this.sponsors = [
      'assets/images/sponsor1.png', 
      'assets/images/sponsor2.png', 
      'assets/images/sponsor3.png', 
      'assets/images/sponsor4.png', 
      'assets/images/sponsor5.png'
    ];
  }
}
