import { MainType } from "../../../types/icons.enum";
import {
  NoRain,
  AmountOfRain,
  NoSnow,
  AmountOfSnow,
} from "./WeatherPreciptationState.types";

export interface DayWeather {
  moon_phase: string;
  temp: {
    morn: number;
    day: number;
    eve: number;
    night: number;
    min: number;
    max: number;
  };
  feels_like: {
    morn: number;
    day: number;
    eve: number;
    night: number;
  };
  uvi: number;
  humidity: number;
  description: string;
  main: MainType;
  icon: string;
  pop: number;
  rain: NoRain | AmountOfRain;
  snow: NoSnow | AmountOfSnow;
}
