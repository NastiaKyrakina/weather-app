import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { MatFormField, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { WeatherService } from './api-services/weather.service';
import { MatIconButton } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
  MatCardTitleGroup
} from '@angular/material/card';
import { WeatherForecast } from './models/Weather';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  first,
  Observable,
  of,
  startWith,
  Subject,
  switchMap
} from 'rxjs';
import { AsyncPipe, DatePipe, DecimalPipe, TitleCasePipe } from '@angular/common';
import { WeatherIconComponent } from './weather-icon/weather-icon.component';
import { MatIcon } from '@angular/material/icon';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NewsArticle } from './models/News';

@Component({
  selector: 'app-weather-forecast-page',
  imports: [
    MatFormField,
    MatInput,
    FormsModule,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    WeatherIconComponent,
    MatCardTitleGroup,
    TitleCasePipe,
    MatIconButton,
    MatIcon,
    MatSuffix,
    DatePipe,
    DecimalPipe,
    AsyncPipe,
  ],
  templateUrl: './weather-forecast-page.component.html',
  styleUrl: './weather-forecast-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherForecastPageComponent implements OnInit {

  private weatherService = inject(WeatherService);
  private destroyRef = inject(DestroyRef);

  query: string = 'Dnipro';
  private search$: Subject<string> = new Subject<string>();

  weatherForecasts$!: Observable<NewsArticle[]>;

  ngOnInit() {
    this.weatherForecasts$ = this.search$
      .pipe(
        startWith(this.query),
        debounceTime(500),
        distinctUntilChanged(),
        takeUntilDestroyed(this.destroyRef),
        switchMap(
          (query => this.loadWeatherForecast()),
        )
      );
  }

  loadWeatherForecast(): Observable<NewsArticle[]> {
    return this.weatherService.getForecastForPeriod(this.query)
      .pipe(
        catchError((error) => {
          console.error(error);
          return of([]);
        })
      );
  }

  searchCity($event: Event): void {
    this.query = ($event.target as HTMLInputElement).value;
    this.search$.next(this.query);
  }
}
