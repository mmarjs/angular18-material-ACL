import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about-video-section',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './about-video-section.component.html',
  styleUrl: './about-video-section.component.scss'
})
export class AboutVideoSectionComponent {

}
