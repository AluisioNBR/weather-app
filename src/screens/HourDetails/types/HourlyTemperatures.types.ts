import { HourWeather } from "../../../components/statements/types/HourWeather.types";
import { AppColors } from "../../../styles/AppColors";

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
export interface HourButtonProps {
  children: HourWeather;
  background: AppColors;
}

export interface ReturnButtonProps {
  background: AppColors;
}
