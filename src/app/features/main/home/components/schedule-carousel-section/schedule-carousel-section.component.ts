import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-schedule-carousel-section',
  standalone: true,
  imports: [
    MatCard,
    MatButtonModule,
    MatIconModule,
    CarouselModule,
    NgFor
  ],
  templateUrl: './schedule-carousel-section.component.html',
  styleUrl: './schedule-carousel-section.component.scss'
})
export class ScheduleCarouselSectionComponent {
  customOptions: OwlOptions = {
    autoWidth: true,
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: [
      `<i class="material-icons">keyboard_arrow_left</i>`, 
      `<i class="material-icons">keyboard_arrow_right</i>`
    ],
    responsive: {
      0: {
        items: 1.5
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      }
    },
    nav: true
  }
 
  sliders: string[] = [
    'assets/images/evcard-pro.png',
    'assets/images/evcard-int.png',
    'assets/images/evcard-open.png',
    'assets/images/evcard-pro.png',
    'assets/images/evcard-int.png',
    'assets/images/evcard-open.png',
  ];
}
