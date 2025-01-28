import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'weather',
    loadChildren:
      () => import('./pages/weather-forecast-page/weather-routing')
        .then(m => m.FORECAST_ROUTING)
  },
  {
    path: '**',
    redirectTo: 'weather',
    pathMatch: 'full',
  }
];
