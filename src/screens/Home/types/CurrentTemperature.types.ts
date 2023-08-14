import { CurrentWeather } from "../../../components/statements/types/CurrentWeather.types";

export interface CurrentTemperatureProps {
  msg: string;
  visibility: boolean;
  loadingWeather: boolean;

  city: string;
  state: string;
  children: CurrentWeather;
}

export interface LocalizationProps {
  city: string;
  state: string;
}
