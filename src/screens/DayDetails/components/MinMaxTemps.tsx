import { View, Text } from "react-native";
import {
  MinMaxContainerProps,
  MinMaxTextProps,
} from "../types/DailyTemperatures.types";

export function MinMaxTemps(props: MinMaxContainerProps) {
  return (
    <View className="flex-row justify-evenly">
      <MinMaxText value={props.max}>Máxima</MinMaxText>
      <MinMaxText value={props.min}>Mínima</MinMaxText>
    </View>
  );
}

function MinMaxText(props: MinMaxTextProps) {
  return (
    <Text className="font-poppins text-center text-xl text-white-main">
      {props.children}: {props.value}°C
    </Text>
  );
}
