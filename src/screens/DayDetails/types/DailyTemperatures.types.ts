import { DayWeather } from "../../../components/statements/types/DayWeather.types";
import { AppColors } from "../../../styles/AppColors";

export type TypeDayName = "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat";

export interface ReturnDateFunctionParams {
  baseYear: number;
  baseMonth: number;
  day: number;
}

export interface DailyTemperaturesContainerProps {
  children: any[] | DayWeather[];
}

export interface DayTemperatureProps {
  children: DayWeather;
  date: string;
}

export interface DayDetailsProps {
  children: DayWeather;
  date: string;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface DayDetailsInformationsProps {
  children: DayWeather;
  date: string;
}

export type instantsType = "morn" | "day" | "eve" | "night";

export interface InformationByDayInstantsProps {
  children: instantsType;
  dayWeather: DayWeather;
}

export interface DayButtonProps {
  children: DayWeather;
  background: AppColors;
  date: string;
}

export interface InformationsDescriptionContainerProps {
  children: DayWeather;
}

export interface TemperaturesContainerProps {
  children: DayWeather;
}

export interface MinMaxContainerProps {
  max: number;
  min: number;
}

export interface MinMaxTextProps {
  children: string;
  value: number;
}
