import { HourWeather } from '../submitCity/weatherStateReducer.types'
import { AppColors } from '../../../styles/AppColors'

interface HourlyTemperaturesContainerProps {
  children: any[] | HourWeather[]
}

interface HourTemperatureProps{
  children: HourWeather
}

interface HourDetailsProps{
	children: HourWeather;
	visible: boolean;
	setVisible: React.Dispatch<React.SetStateAction<boolean>>
}
interface HourButtonProps {
	children: HourWeather,
	background: AppColors
}

interface ReturnButtonProps {
	background: AppColors
}

export type {
  HourlyTemperaturesContainerProps,
  HourTemperatureProps,
  HourDetailsProps,
  HourButtonProps,
  ReturnButtonProps
}