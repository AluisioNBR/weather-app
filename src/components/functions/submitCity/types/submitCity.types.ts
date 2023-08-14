import type { CitySelectionProps } from "../../../../screens/Home/types/CitySelection.types";
import type { FoundDataOfRequest, NotFoundDataOfRequest } from "./data.types";

export interface submitCityParams {
  cityValue: string;
  setCityValue: React.Dispatch<React.SetStateAction<string>>;
  citySelectionProps: CitySelectionProps;
}

export type FetchWeatherInformationReturn =
  | FoundDataOfRequest
  | NotFoundDataOfRequest;

export interface FetchWeatherInformationParams {
  cityValue: string;
  setLoadingWeather: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface VerifyResponseParams {
  information: FetchWeatherInformationReturn;
  citySelectionProps: CitySelectionProps;
}
