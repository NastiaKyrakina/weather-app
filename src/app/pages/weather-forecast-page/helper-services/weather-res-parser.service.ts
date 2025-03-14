import { Injectable } from '@angular/core';
import {
  WeatherByCity,
  CurrentWeatherResponse,
  WeatherForecastRes,
  WeatherDetails,
  WeatherDetailsRes, WeatherForecast, WeatherGroup
} from '../models/Weather';

@Injectable()
export class WeatherResParserService {

  getParsedWeatherData(weather: CurrentWeatherResponse): WeatherByCity {
    return {
      coordinated: weather.coord,
      city: weather.name,
      country: weather.sys.country,
      weather: this.getWeatherDetails(weather)
    }
  }

  getParsedForecastData(weather: WeatherForecastRes): WeatherForecast {
    console.log('getParsedForecastData', weather);
    return {
      coordinated: weather.city.coord,
      city: weather.city.name,
      country: weather.city.country,
      list: this.groupByDate(weather.list),
    }
  }

  groupByDate(listOfForecasts: WeatherDetailsRes[]): WeatherGroup[] {
    const datesMap: Record<string, WeatherGroup> = {};

    listOfForecasts.forEach((forecastsByTime) => {
     const [date, time] = forecastsByTime.dt_txt.split(' ');
     const weather = this.getWeatherDetails(forecastsByTime);
     if (!datesMap[date]) {
       datesMap[date] = {
         date,
         weatherByTime: [weather],
         tempMax: weather.tempMax,
         tempMin: weather.tempMin,
         humidity: weather.humidity,
         main: weather.main,
         description: weather.description,
         icon: weather.icon,
       }
     } else {
       datesMap[date].weatherByTime = [
         ...datesMap[date].weatherByTime,
         weather,
       ];

       datesMap[date].tempMax = Math.max(datesMap[date].tempMax, weather.tempMax);
       datesMap[date].tempMin = Math.min(datesMap[date].tempMin, weather.tempMin);
       if (time === '12:00:00') {
         datesMap[date].main = weather.main;
         datesMap[date].description = weather.description;
         datesMap[date].humidity = weather.humidity;
         datesMap[date].icon = weather.icon;
       }
     }
    });

    return Object.values(datesMap);
  }

  getWeatherDetails(weather: WeatherDetailsRes): WeatherDetails {
    return {
      main: weather.weather?.[0]?.main,
      description: weather.weather?.[0]?.description,
      icon: weather.weather?.[0]?.icon,
      temp: weather.main.temp,
      feelsLike: weather.main.temp_min,
      tempMin: weather.main.temp_min,
      tempMax: weather.main.temp_max,
      humidity: weather.main.humidity,
      dateTime: weather.dt_txt,
    };
  }
}
