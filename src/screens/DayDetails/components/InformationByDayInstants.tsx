import { View, Text } from "react-native";
import { InformationByDayInstantsProps } from "../types/DailyTemperatures.types";
import { InstantsEnum } from "../types/Instants.enum";

export function InformationByDayInstants(props: InformationByDayInstantsProps) {
  return (
    <View className="mx-3">
      <Text className="font-poppins text-white-main text-xl">
        {InstantsEnum[props.children]}
      </Text>

      <Text className="font-poppins text-white-main text-lg text-center">
        {props.dayWeather.temp[props.children]}°C
      </Text>

      <Text className="font-poppins text-gray-1 text-base text-center">
        {props.dayWeather.feels_like[props.children]}°C
      </Text>
    </View>
  );
}
