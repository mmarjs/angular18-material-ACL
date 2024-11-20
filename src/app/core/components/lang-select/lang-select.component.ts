import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-lang-select',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    NgFor
  ],
  templateUrl: './lang-select.component.html',
  styleUrl: './lang-select.component.scss'
})
export class LangSelectComponent {
  langs = [
    {icon: '🇺🇲', img: 'assets/flags/US.png', value: 'USA'},
    {icon: '🇪🇦', img: 'assets/flags/ES.png', value: 'ESP'}
  ];

  selectedLang: Lang = this.langs[0];

  onSelectLang(lang: Lang) {
    this.selectedLang = lang;
  }
}

export interface Lang {
  icon: string;
  img: string;
  value: string;
}
