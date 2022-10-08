import { AppColors } from '../../../styles/AppColors';
import type { DayWeather } from '../submitCity/weatherStateReducer.types'

type TypeDayName = "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat"

enum DayNames {
  Sun = "Domingo",
  Mon = "Segunda",
  Tue = "Terça",
  Wed = "Quarta",
  Thu = "Quinta",
  Fri = "Sexta",
  Sat = "Sábado"
}

interface ReturnDateFunctionParams {
  baseYear: number,
  baseMonth: number,
  day: number
}

interface DailyTemperaturesContainerProps {
  children: any[] | DayWeather[]
}


interface DayTemperatureProps{
  children: DayWeather;
  date: string
}

interface DayDetailsProps{
	children: DayWeather;
	date: string;
	visible: boolean;
	setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

interface DayDetailsInformationsProps{
	children: DayWeather;
	date: string
}

type instantsType = 'morn' | 'day' | 'eve' | 'night'

enum InstantsEnum {
	morn = 'Manhã',
	day = 'Dia',
	eve = 'Tarde',
	night = 'Noite'
}

interface InformationByDayInstantsProps {
	children: instantsType,
	dayWeather: DayWeather
}

interface DayButtonProps {
	children: DayWeather,
	background: AppColors,
  date: string
}

interface InformationsDescriptionContainerProps {
	children: DayWeather
}

interface TemperaturesContainerProps {
	children: DayWeather,
}

interface MinMaxContainerProps {
	max: number,
  min: number
}

interface MinMaxTextProps {
	children: string,
  value: number
}

export {
  TypeDayName,
  DayNames,
  ReturnDateFunctionParams,

  DailyTemperaturesContainerProps,
  DayTemperatureProps,
  DayButtonProps,

  DayDetailsProps,
  DayDetailsInformationsProps,
  instantsType,
  InstantsEnum,
  InformationByDayInstantsProps,
  InformationsDescriptionContainerProps,
  TemperaturesContainerProps,
  MinMaxContainerProps,
  MinMaxTextProps
}