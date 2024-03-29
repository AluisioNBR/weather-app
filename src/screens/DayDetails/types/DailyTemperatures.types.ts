import { DayWeather } from "../../../components/statements/types/DayWeather.types";

export type TypeDayName =
  | "Day0"
  | "Day1"
  | "Day2"
  | "Day3"
  | "Day4"
  | "Day5"
  | "Day6";

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
  background: string;
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
