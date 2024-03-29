import { CurrentWeather } from "./types/CurrentWeather.types";
import { DayWeather } from "./types/DayWeather.types";
import { HourWeather } from "./types/HourWeather.types";
import { WeatherReducerAction } from "./types/WeatherReducerAction.types";
import { WeatherState } from "./types/WeatherState.types";

export const weatherInitialValue: WeatherState = {
  city: "",
  state: "",
  currentWeather: {
    temp: 0,
    feels_like: 0,
    uvi: 0,
    humidity: 0,
    description: "",
    main: "",
    icon: "",
    rain: { rainy: "no-rain" },
    snow: { snowed: "no-snow" },
  },
  hourlyWeather: [],
  dailyWeather: [],
};

export function weatherReducer(
  state: WeatherState,
  action: WeatherReducerAction
) {
  let value: string | CurrentWeather | HourWeather[] | DayWeather[];
  switch (action.type) {
    case "city":
      value = action.value as string;
      return {
        city: value,
        state: state.state,
        currentWeather: state.currentWeather,
        hourlyWeather: state.hourlyWeather,
        dailyWeather: state.dailyWeather,
      };

    case "state":
      value = action.value as string;
      return {
        city: state.city,
        state: value,
        currentWeather: state.currentWeather,
        hourlyWeather: state.hourlyWeather,
        dailyWeather: state.dailyWeather,
      };

    case "currentWeather":
      value = action.value as CurrentWeather;
      return {
        city: state.city,
        state: state.state,
        currentWeather: value,
        hourlyWeather: state.hourlyWeather,
        dailyWeather: state.dailyWeather,
      };

    case "hourlyWeather":
      value = action.value as HourWeather[];
      return {
        city: state.city,
        state: state.state,
        currentWeather: state.currentWeather,
        hourlyWeather: value,
        dailyWeather: state.dailyWeather,
      };

    case "dailyWeather":
      value = action.value as DayWeather[];
      return {
        city: state.city,
        state: state.state,
        currentWeather: state.currentWeather,
        hourlyWeather: state.hourlyWeather,
        dailyWeather: value,
      };

    default:
      return state;
  }
}
