import { View, Text } from "react-native";
import { TemperatureDetailsOnPreciptationProps } from "../types/details.types";

export function TemperatureDetailsOnPreciptation(
  props: TemperatureDetailsOnPreciptationProps
) {
  return (
    <View className="items-center rounded-full bg-black-1 p-1">
      <View className="flex-row items-center justify-between">
        <Text className="font-poppins text-sm text-white-main mx-2">
          Umidade: {props.humidity}
        </Text>

        <Text className="font-poppins text-sm text-white-main mx-2">
          Índice UV: {props.uvi}
        </Text>
      </View>

      <View className="items-center">
        <Text className="font-poppins text-sm text-white-main mx-2">
          {props.children}: {props.preciptation}
        </Text>
      </View>
    </View>
  );
}
