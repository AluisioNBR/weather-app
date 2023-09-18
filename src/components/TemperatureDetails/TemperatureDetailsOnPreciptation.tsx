import { View } from "react-native";
import { TemperatureDetailsOnPreciptationProps } from "../types/details.types";
import { Detail } from "./Detail";

export function TemperatureDetailsOnPreciptation(
  props: TemperatureDetailsOnPreciptationProps
) {
  return (
    <View className="h-24 justify-evenly items-center rounded-full bg-[#5555] p-2 w-[85%]">
      {props.feels_like ? (
        <Detail title="Sensação térmica">{props.feels_like}°C</Detail>
      ) : null}
      <Detail title="Umidade">{props.humidity}</Detail>
      <Detail title="Índice UV">{props.uvi}</Detail>
      <Detail title={props.children}>{props.preciptation}</Detail>
    </View>
  );
}
