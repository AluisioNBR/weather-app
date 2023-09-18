import { CurrentWeather } from "../../../components/statements/types/CurrentWeather.types";
import { AppMsg } from "./AppMsg.interface";

export interface CurrentTemperatureProps {
  msg: AppMsg;
  visibility: boolean;

  city: string;
  state: string;
  children: CurrentWeather;
}

export interface LocalizationProps {
  city: string;
  state: string;
}
