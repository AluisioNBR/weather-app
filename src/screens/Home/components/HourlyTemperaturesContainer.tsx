import { ScrollView } from "react-native";
import { HourTemperature } from "./HourTemperature";
import type { HourlyTemperaturesContainerProps } from "../../HourDetails/types/HourlyTemperatures.types";
import { HourWeather } from "../../../components/statements/types/HourWeather.types";

function HourlyTemperaturesContainer(props: HourlyTemperaturesContainerProps) {
  let numberKey = 0;
  const temperatures = props.children.map(mapTemperatureHours);

  function mapTemperatureHours(hour: HourWeather) {
    numberKey += 1;
    return (
      <HourTemperature key={`${hour.hour}=${numberKey}`}>
        {hour}
      </HourTemperature>
    );
  }

  return (
    <ScrollView className="flex-1 mb-2" horizontal={true}>
      {temperatures}
    </ScrollView>
  );
}

export { HourlyTemperaturesContainer };
