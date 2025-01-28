import { WeatherForecastPageComponent } from './weather-forecast-page.component';
import { Route } from '@angular/router';

export const FORECAST_ROUTING: Route[] = [
  {
    path: '',
    component: WeatherForecastPageComponent,
    providers: [],
  }
];
