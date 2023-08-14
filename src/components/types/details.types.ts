import {
  NoRain,
  AmountOfRain,
  NoSnow,
  AmountOfSnow,
} from "../statements/types/WeatherPreciptationState.types";

export interface CompostTemperatureDetailsProps {
  children: {
    humidity: number;
    uvi: number;
    pop: number;
    rain: NoRain | AmountOfRain;
    snow: NoSnow | AmountOfSnow;
  };
}

export interface TemperatureDetailsProps {
  humidity: number;
  uvi: number;
  rain: NoRain | AmountOfRain;
  snow: NoSnow | AmountOfSnow;
}

export interface TemperatureDetailsOnPreciptationProps {
  humidity: string;
  uvi: string;
  children: string;
  preciptation: string;
}

export interface TemperatureDetailsOnClearWeatherProps {
  humidity: string;
  uvi: string;
}
