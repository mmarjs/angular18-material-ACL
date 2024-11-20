import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-top-notification',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './top-notification.component.html',
  styleUrl: './top-notification.component.scss'
})
export class TopNotificationComponent {

}
