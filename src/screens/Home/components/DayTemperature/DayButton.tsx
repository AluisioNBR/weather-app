import { View, Text, Image } from "react-native";
import { DayButtonProps } from "../../../DayDetails/types/DailyTemperatures.types";

export function DayButton(props: DayButtonProps) {
  return (
    <View
      style={{ backgroundColor: props.background }}
      className="flex-row items-center justify-between mb-1 mx-2 p-3 rounded-xl"
    >
      <Text className="text-white-main text-lg font-poppins">{props.date}</Text>

      <View className="flex-row items-center">
        <Image
          source={{ uri: props.children.icon }}
          style={{ width: 32, height: 32 }}
        />

        <Text className="text-white-main text-lg font-poppins">
          {props.children.temp.min}°C - {props.children.temp.max}°C
        </Text>
      </View>
    </View>
  );
}
