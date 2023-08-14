import { View, Text } from "react-native";
import { TemperatureDetailsOnClearWeatherProps } from "../types/details.types";

export function TemperatureDetailsOnClearWeather(
  props: TemperatureDetailsOnClearWeatherProps
) {
  return (
    <View className="flex-row items-center justify-between rounded-full bg-black-1 p-1">
      <Text className="font-poppins text-sm text-white-main mx-2">
        Umidade: {props.humidity}
      </Text>

      <Text className="font-poppins text-sm text-white-main mx-2">
        Índice UV: {props.uvi}
      </Text>
    </View>
  );
}
