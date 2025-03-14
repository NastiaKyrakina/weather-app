import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpRequestService } from '../../../core/api-services/http-request.service';
import { environment } from '../../../../environments/environment';
import { WeatherResParserService } from '../helper-services/weather-res-parser.service';
import { WeatherByCity, CurrentWeatherResponse, WeatherForecast, WeatherForecastRes } from '../models/Weather';
import { CacheResult } from '../../../core/cache-services/cache-service';
import { NewsArticle } from '../models/News';

@Injectable()
export class WeatherService extends HttpRequestService {

  constructor(
    private http: HttpClient,
    private resParser: WeatherResParserService
  ) {
    super();
  }

  @CacheResult()
  getForecastForPeriod(city: string): Observable<NewsArticle[]> {
    return this.http.get<{ articles: NewsArticle[] }>(
      this.url('everything'),
      this.generateRequestOptions({ q: city }))
      .pipe(
        map(res => res.articles),
      );
  }

  url(path: string): string {
    return `${environment.weatherApi}/${path}`;
  }
}


// https://api.openweathermap.org/data/2.5/weather?q=Odessa&type=like&sort=population&cnt=30&appid=d0492fa218ba79f652d2afa4a378f1ce
//
//   api.openweathermap.org/data/2.5/forecast?q=Odessa&cnt=1&appid=d0492fa218ba79f652d2afa4a378f1ce
