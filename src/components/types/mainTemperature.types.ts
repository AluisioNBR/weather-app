export interface MainTemperatureProps {
  icon: string;
  temperature: string;
  feels_like: string;
  description: string;
  descriptionSize?: number;
}

export interface MainDescriptionProps {
  children: string;
  icon: string;
  size: undefined | number;
}
