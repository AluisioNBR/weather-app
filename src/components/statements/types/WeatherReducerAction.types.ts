import { CurrentWeather } from "./CurrentWeather.types";
import { DayWeather } from "./DayWeather.types";
import { HourWeather } from "./HourWeather.types";

export interface WeatherReducerAction {
  type: string;
  value: string | CurrentWeather | HourWeather[] | DayWeather[];
}
