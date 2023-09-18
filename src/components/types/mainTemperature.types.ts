import { MainType } from "../../types/icons.enum";

export interface MainTemperatureProps {
  icon: string;
  main: MainType;
  temperature: string;
  description: string;
  imgSize?: number;
  descriptionSize?: number;
  hour?: number;
}

export interface MainDescriptionProps {
  children: string;
  main: MainType;
  icon: string;
  imgSize?: number;
  descriptionSize?: number;
  hour?: number;
}
