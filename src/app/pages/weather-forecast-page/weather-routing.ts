import { WeatherForecastPageComponent } from './weather-forecast-page.component';
import { Route } from '@angular/router';
import { WeatherService } from './api-services/weather.service';
import { WeatherResParserService } from './helper-services/weather-res-parser.service';

export const FORECAST_ROUTING: Route[] = [
  {
    path: '',
    component: WeatherForecastPageComponent,
    providers: [
      WeatherResParserService,
      WeatherService,
    ],
  }
];
