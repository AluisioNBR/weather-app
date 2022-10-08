interface MainTemperatureProps{
  icon: string;
  temperature: string;
  feels_like: string;
  description: string;
  descriptionSize: undefined | number
}

interface MainDescriptionProps {
  children: string,
  icon: string,
  size: undefined | number
}

export type { MainTemperatureProps, MainDescriptionProps }