import { CurrentWeather } from "../../../statements/types/CurrentWeather.types";
import { DayWeather } from "../../../statements/types/DayWeather.types";
import { HourWeather } from "../../../statements/types/HourWeather.types";

export interface FoundDataOfRequest {
  cod: number;
  city: string;
  state: string;
  current: CurrentWeather;
  hourly: HourWeather[];
  daily: DayWeather[];
}

export interface NotFoundDataOfRequest {
  cod: number;
  msg: string;
}
