import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardFooter } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-blog-carousel-section',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardFooter,
    MatButtonModule,
    MatIconModule,
    CarouselModule,
    NgFor
  ],
  templateUrl: './blog-carousel-section.component.html',
  styleUrl: './blog-carousel-section.component.scss'
})
export class BlogCarouselSectionComponent {
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
 
  sliders: Blog[] = [
    {img: 'assets/images/news-card1.png', date: 'March 21, 2024', title: '2022-2023 ACL Open 12, Shootout 3 & 4, and SuperHole IV Prelim 3 & 4 Recap'},
    {img: 'assets/images/news-card1.png', date: 'March 21, 2024', title: '2022-2023 ACL Open 12, Shootout 3 & 4d c c cd'},
    {img: 'assets/images/news-card1.png', date: 'March 21, 2024', title: '2022-2023 ACL Open 12, Shootout 3 & 4, and SuperHole IV Prelim 3 & 4 Recap'},
    {img: 'assets/images/news-card1.png', date: 'March 21, 2024', title: 'What You Need To Know About The 2024 ACL Pro Season'},
    {img: 'assets/images/news-card1.png', date: 'March 21, 2024', title: '2022-2023 ACL Open 12, Shootout 3 & 4, and SuperHole IV Prelim 3 & 4 Recap'},
    {img: 'assets/images/news-card1.png', date: 'March 21, 2024', title: '2022-2023 ACL Open 12, Shootout 3 & 4d c c cd'},
  ];

  videoOptions: OwlOptions = {
    autoWidth: true,
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: [
      `<i class="material-icons">keyboard_arrow_left</i>`, 
      `<i class="material-icons">keyboard_arrow_right</i>`
    ],
    responsive: {
      0: {
        items: 1.5
      },
      425: {
        items: 2
      },
      576: {
        items: 2
      },
      768: {
        items: 2
      },
      992: {
        items: 2
      }
    },
    nav: true
  }

  videos: Video[] = [
    {thumbnail: 'assets/images/video.png', title: 'Tough break for Jayden Ellis😍', description: 'Americal cornhole league', views: '2.3K views * 2 months ago'},
    {thumbnail: 'assets/images/video.png', title: 'Make It Look Easy😊', description: 'Americal cornhole league', views: '2.3K views * 2 months ago'},
    {thumbnail: 'assets/images/video.png', title: 'Tough break for Jayden Ellis😡', description: 'Americal cornhole league', views: '2.3K views * 2 months ago'},
    {thumbnail: 'assets/images/video.png', title: 'Make It Look Easy😜', description: 'Americal cornhole league', views: '2.3K views * 2 months ago'},
  ];
}

export interface Blog {
  img: string;
  date: string;
  title: string;
}

export interface Video {
  thumbnail: string;
  title: string;
  description: string;
  views: string;
}