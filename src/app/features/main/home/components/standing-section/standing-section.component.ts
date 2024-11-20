import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-standing-section',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    CarouselModule,
    NgFor
  ],
  templateUrl: './standing-section.component.html',
  styleUrl: './standing-section.component.scss'
})
export class StandingSectionComponent {
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
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 3
      },
      992: {
        items: 3
      }
    },
    nav: true
  }
 
  sliders: StandingType[] = [
    {title: "PRO SINGLES", subtitle: "Top 10's", button: {title: "VIEW PRO SINGLES", action: ""}},
    {title: "PRO DOUBLES", subtitle: "Top 10's", button: {title: "VIEW PRO DOUBLES", action: ""}},
    {title: "PRO TEAMS", subtitle: "16 Teams", button: {title: "VIEW PRO TEAMS", action: ""}},
    {title: "OPEN", subtitle: "Top 10's", button: {title: "VIEW OPEN", action: ""}},
  ];
}

export interface StandingType {
  title: string;
  subtitle: string;
  button: ButtonType;
}

export interface ButtonType {
  title: string;
  action: string;
}