import type { FoundDataOfRequest } from "./types/data.types";
import type { CitySelectionProps } from "../../../screens/Home/types/CitySelection.types";

function renderErr(msg: string, citySelectionProps: CitySelectionProps) {
  citySelectionProps.setMsgValue({ msg: msg, duration: 0 });
  citySelectionProps.setTemperatureVisibility(false);
}

function renderInformations(
  information: FoundDataOfRequest,
  citySelectionProps: CitySelectionProps
) {
  citySelectionProps.setLocalization(information.city, information.state);

  citySelectionProps.setCurrentWeather(information.current);
  citySelectionProps.setHourlyWeather(information.hourly);
  citySelectionProps.setDailyWeather(information.daily);

  citySelectionProps.setTemperatureVisibility(true);
}

export { renderInformations, renderErr };
