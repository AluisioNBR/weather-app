import {
  NoRain,
  AmountOfRain,
  NoSnow,
  AmountOfSnow,
} from "./WeatherPreciptationState.types";

export interface HourWeather {
  hour: string;
  temp: number;
  feels_like: number;
  uvi: number;
  humidity: number;
  description: string;
  icon: string;
  pop: number;
  rain: NoRain | AmountOfRain;
  snow: NoSnow | AmountOfSnow;
}
