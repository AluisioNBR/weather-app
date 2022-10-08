import type { CitySelectionProps } from '../CitySelection.types';
import type {
  FoundDataOfRequest,
  NotFoundDataOfRequest
} from './data.types'

interface submitCityParams{
	cityValue: string,
	setCityValue: React.Dispatch<React.SetStateAction<string>>,
	citySelectionProps: CitySelectionProps
}

type FetchWeatherInformationReturn = FoundDataOfRequest | NotFoundDataOfRequest

interface FetchWeatherInformationParams{
	cityValue: string,
	setLoadingWeather: React.Dispatch<React.SetStateAction<boolean>>
}

interface VerifyResponseParams{
	information: FetchWeatherInformationReturn,
	citySelectionProps: CitySelectionProps
}

export {
  submitCityParams,
  FetchWeatherInformationReturn,
  FetchWeatherInformationParams,
  VerifyResponseParams
}