import { ScrollView } from "react-native";
import { DayTemperature } from "./DayTemperature/DayTemperature";

import { DailyTemperaturesContainerProps } from "../../DayDetails/types/DailyTemperatures.types";
import { DayWeather } from "../../../components/statements/types/DayWeather.types";
import { getCurrentDate, returnDate } from "../functions/dailyContainer";

export function DailyTemperaturesContainer({
  children,
}: DailyTemperaturesContainerProps) {
  let [baseYear, baseNumberMonth, baseNumberDay] = getCurrentDate();

  const temperatures = children.map(mapTemperatureHours);

  function mapTemperatureHours(day: DayWeather) {
    const dateToReturn = returnDate({
      baseYear: baseYear,
      baseMonth: baseNumberMonth - 1,
      day: baseNumberDay,
    });
    baseNumberDay += 1;

    return (
      <DayTemperature key={dateToReturn} date={dateToReturn}>
        {day}
      </DayTemperature>
    );
  }

  return <ScrollView className="flex-1">{temperatures}</ScrollView>;
}
