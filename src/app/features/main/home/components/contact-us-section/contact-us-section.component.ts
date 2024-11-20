import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-contact-us-section',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './contact-us-section.component.html',
  styleUrl: './contact-us-section.component.scss'
})
export class ContactUsSectionComponent {

}
