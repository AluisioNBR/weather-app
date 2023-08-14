import {
  NoRain,
  AmountOfRain,
  NoSnow,
  AmountOfSnow,
} from "./WeatherPreciptationState.types";

export interface CurrentWeather {
  temp: number;
  feels_like: number;
  uvi: number;
  humidity: number;
  description: string;
  icon: string;
  rain: NoRain | AmountOfRain;
  snow: NoSnow | AmountOfSnow;
}
