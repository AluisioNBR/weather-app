import { View } from "react-native";
import { TemperatureDetailsOnClearWeatherProps } from "../types/details.types";
import { Detail } from "./Detail";

export function TemperatureDetailsOnClearWeather(
  props: TemperatureDetailsOnClearWeatherProps
) {
  return (
    <View className="h-24 justify-evenly items-center rounded-full bg-[#5555] p-2 w-[85%]">
      {props.feels_like ? (
        <Detail title="Sensação térmica">{props.feels_like}°C</Detail>
      ) : null}
      <Detail title="Umidade">{props.humidity}</Detail>
      <Detail title="Índice UV">{props.uvi}</Detail>
    </View>
  );
}
