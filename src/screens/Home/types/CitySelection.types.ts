import { CurrentWeather } from "../../../components/statements/types/CurrentWeather.types";
import { DayWeather } from "../../../components/statements/types/DayWeather.types";
import { HourWeather } from "../../../components/statements/types/HourWeather.types";
import { AppMsg } from "./AppMsg.interface";

export interface CitySelectionProps {
  setMsgValue: React.Dispatch<React.SetStateAction<AppMsg>>;
  setTemperatureVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  setLocalization: (city: string, state: string) => void;
  setCurrentWeather: (currentWeather: CurrentWeather) => void;
  setHourlyWeather: (hourlyWeather: HourWeather[]) => void;
  setDailyWeather: (dailyWeather: DayWeather[]) => void;
  city: string;
  state: string;
}
