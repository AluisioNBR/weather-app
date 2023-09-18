import { HourWeather } from "../../../components/statements/types/HourWeather.types";

export interface HourlyTemperaturesContainerProps {
  children: any[] | HourWeather[];
}

export interface HourTemperatureProps {
  children: HourWeather;
}

export interface HourDetailsProps {
  children: HourWeather;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ReturnButtonProps {
  background: string;
}
