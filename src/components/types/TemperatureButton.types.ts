import { MainType } from "../../types/icons.enum";

export interface TemperatureButtonProps {
  children: string;
  icon: string;
  temp: number | number[];
  background: string;
  main: MainType;
  hour: number;
}
