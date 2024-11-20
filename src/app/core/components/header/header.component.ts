import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatOption, MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCard } from '@angular/material/card';
import { LangSelectComponent } from '../lang-select/lang-select.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOption,
    NgFor,
    MatButtonModule,
    MatIconModule,
    MatCard,
    LangSelectComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  selectedLang: string = 'USA';
  openMobMenu: boolean = false;
  
  langs = [
    {icon: '🇺🇲', img: 'assets/flags/US.png', value: 'USA'},
    {icon: '🇪🇦', img: 'assets/flags/ES.png', value: 'ESP'}
  ];

  openedSubMenu: string = '';

  onToggleMobNav() {
    this.openMobMenu = !this.openMobMenu;
  }

  onToggleSubMenu(menu: string) {
    if (this.openedSubMenu === menu) {
      this.openedSubMenu = '';
    } else {
      this.openedSubMenu = menu;
    }
  }
}
