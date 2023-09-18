import { DayWeather } from "../statements/types/DayWeather.types";
import { HourWeather } from "../statements/types/HourWeather.types";
import {
  NoRain,
  AmountOfRain,
  NoSnow,
  AmountOfSnow,
} from "../statements/types/WeatherPreciptationState.types";

export interface CompostTemperatureDetailsProps {
  children: HourWeather | DayWeather;
}

export interface TemperatureDetailsProps {
  feels_like: string;
  humidity: number;
  uvi: number;
  rain: NoRain | AmountOfRain;
  snow: NoSnow | AmountOfSnow;
}

export interface TemperatureDetailsOnPreciptationProps {
  feels_like: string;
  humidity: string;
  uvi: string;
  children: string;
  preciptation: string;
}

export interface TemperatureDetailsOnClearWeatherProps {
  feels_like: string;
  humidity: string;
  uvi: string;
}
