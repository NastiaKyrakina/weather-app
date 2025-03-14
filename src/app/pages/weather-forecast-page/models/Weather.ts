export type WeatherByCity = {
  city: string;
  country: string;
  coordinated: Coordinated;
  weather: WeatherDetails;
};

export type WeatherForecast = {
  city?: string;
  country?: string;
  coordinated?: Coordinated;
  list: Array<WeatherGroup>;
};

export type WeatherDetails = {
  main: string;
  description: string;
  icon: string;
  temp: number;
  feelsLike: number;
  tempMin: number;
  tempMax: number;
  humidity: number;
  dateTime?: string;
}


export type WeatherGroup = {
  date: string;
  tempMin: number;
  tempMax: number;
  weatherByTime: WeatherDetails[];
  humidity: number;
  main: string;
  description: string;
  icon: string;
}


export type Coordinated = {
  lon: number;
  lat: number;
}

export type CurrentWeatherResponse = WeatherDetailsRes & {
  coord: Coordinated;
  sys: {
    country: string;
  },
  timezone: 7200;
  name: string;
}

export type WeatherDetailsRes = {
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  },
  weather: Array<{
    main: string;
    description: string;
    icon: string; // "icon": "02n"
  }>,
  dt_txt: string; // date-time "2025-01-29 03:00:00"
}

export type WeatherForecastRes = {
  city: {
    name: string;
    coord: Coordinated;
    country: string;
    timezone: string;
  },
  list: Array<WeatherDetailsRes>,
}
