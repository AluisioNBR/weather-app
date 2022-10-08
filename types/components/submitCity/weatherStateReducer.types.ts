interface WeatherReducerAction {
  type: string;
  value: string | CurrentWeather | HourWeather[] | DayWeather[]
}

interface WeatherState{
  city: string;
  state: string;
  currentWeather: CurrentWeather;
  hourlyWeather: HourWeather[] | [];
  dailyWeather: DayWeather[] | [];
}

interface CurrentWeather{
  temp: number;
  feels_like: number;
  uvi: number;
  humidity: number;
  description: string;
  icon: string;
  rain: NoRain | AmountOfRain;
  snow: NoSnow | AmountOfSnow
}

interface HourWeather{
  hour: string;
  temp: number;
  feels_like: number;
  uvi: number;
  humidity: number;
  description: string;
  icon: string;
  pop: number;
  rain: NoRain | AmountOfRain;
  snow: NoSnow | AmountOfSnow
}

interface DayWeather{
  moon_phase: string;
  temp: {
    morn: number;
    day: number;
    eve: number;
    night: number;
    min: number;
    max: number;
  };
  feels_like: {
    morn: number;
    day: number;
    eve: number;
    night: number;
  };
  uvi: number;
  humidity: number;
  description: string;
  icon: string;
  pop: number;
  rain: NoRain | AmountOfRain;
  snow: NoSnow | AmountOfSnow;
}

interface NoRain{
  rainy: 'no-rain' 
}

interface AmountOfRain{
  rainy: 'rain',
  rain: number
}

interface NoSnow{
  snowed: 'no-snow'
}

interface AmountOfSnow{
  snowed: 'snow',
  snow: number
}

export type {
  WeatherState,
  CurrentWeather,
  HourWeather,
  DayWeather,
  NoRain,
  AmountOfRain,
  NoSnow,
  AmountOfSnow,
  WeatherReducerAction
}