import { View } from "react-native";
import {
  TemperaturesContainerProps,
  instantsType,
} from "../types/DailyTemperatures.types";
import { InformationByDayInstants } from "./InformationByDayInstants";
import { MinMaxTemps } from "./MinMaxTemps";

export function TemperaturesContainer({
  children,
}: TemperaturesContainerProps) {
  const instants: instantsType[] = ["morn", "day", "eve", "night"];
  const temps = instants.map((instant: instantsType) => {
    return (
      <InformationByDayInstants key={instant} dayWeather={children}>
        {instant}
      </InformationByDayInstants>
    );
  });

  return (
    <View className="m-[2px]">
      <MinMaxTemps max={children.temp.max} min={children.temp.min} />

      <View className="flex-row">{temps}</View>
    </View>
  );
}
