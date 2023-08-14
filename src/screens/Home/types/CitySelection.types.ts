import { CurrentWeather } from "../../../components/statements/types/CurrentWeather.types";
import { DayWeather } from "../../../components/statements/types/DayWeather.types";
import { HourWeather } from "../../../components/statements/types/HourWeather.types";

export interface CitySelectionProps {
  setMsgValue: React.Dispatch<React.SetStateAction<string>>;
  setTemperatureVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  setLoadingWeather: React.Dispatch<React.SetStateAction<boolean>>;
  setLocalization: (city: string, state: string) => void;
  setCurrentWeather: (currentWeather: CurrentWeather) => void;
  setHourlyWeather: (hourlyWeather: HourWeather[]) => void;
  setDailyWeather: (dailyWeather: DayWeather[]) => void;
}

export interface SubmitButtonProps {
  children: ContentContext;
}

export interface ContentContext {
  cityValue: string;
  setCityValue: React.Dispatch<React.SetStateAction<string>>;
  citySelectionProps: CitySelectionProps;
}
