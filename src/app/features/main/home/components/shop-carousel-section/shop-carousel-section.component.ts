import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-shop-carousel-section',
  standalone: true,
  imports: [
    MatCard, 
    MatCardContent,
    MatButtonModule,
    MatIconModule,
    CarouselModule,
    NgFor
  ],
  templateUrl: './shop-carousel-section.component.html',
  styleUrl: './shop-carousel-section.component.scss'
})
export class ShopCarouselSectionComponent {
  customOptions: OwlOptions = {
    autoHeight: true,
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
      576: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 5
      }
    },
    nav: false
  }
 
  sliders: Product[] = [
    {img: 'assets/images/shop1.png', name: 'ACL PRO PLUS Performance Package', price: '$59.9'},
    {img: 'assets/images/shop2.png', name: 'ACL PRO PLUS Performance Package', price: '$59.9'},
    {img: 'assets/images/shop3.png', name: 'ACL PRO PLUS Performance Package', price: '$59.9'},
    {img: 'assets/images/shop4.png', name: 'ACL PRO PLUS Performance Package', price: '$59.9'},
    {img: 'assets/images/shop5.png', name: 'ACL PRO PLUS Performance Package', price: '$59.9'},
    {img: 'assets/images/shop1.png', name: 'ACL PRO PLUS Performance Package', price: '$59.9'},
    {img: 'assets/images/shop2.png', name: 'ACL PRO PLUS Performance Package', price: '$59.9'},
    {img: 'assets/images/shop3.png', name: 'ACL PRO PLUS Performance Package', price: '$59.9'},
  ];

}

export interface Product {
  img: string;
  name: string;
  price: string;
}