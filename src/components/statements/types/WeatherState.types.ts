import { CurrentWeather } from "./CurrentWeather.types";
import { DayWeather } from "./DayWeather.types";
import { HourWeather } from "./HourWeather.types";

export interface WeatherState {
  city: string;
  state: string;
  currentWeather: CurrentWeather;
  hourlyWeather: HourWeather[] | [];
  dailyWeather: DayWeather[] | [];
}
