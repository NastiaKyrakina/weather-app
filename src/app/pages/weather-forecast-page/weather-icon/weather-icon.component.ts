import { Component, computed, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-weather-icon',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './weather-icon.component.html',
  styleUrl: './weather-icon.component.scss'
})
export class WeatherIconComponent {
  icon = input();
  iconPath = computed(() => `${this.icon()}.png`);
}
