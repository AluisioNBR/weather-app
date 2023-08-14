import { View, Text, Image } from "react-native";
import { HourButtonProps } from "../../../HourDetails/types/HourlyTemperatures.types";

export function HourButton(props: HourButtonProps) {
  return (
    <View
      style={{ backgroundColor: props.background }}
      className="items-center, justify-evenly mx-2 p-3 rounded-full w-40 h-40"
    >
      <Text className="text-white-main text-xl font-poppins">
        {props.children.hour}
      </Text>

      <View className="flex-row items-center">
        <Image
          source={{ uri: props.children.icon }}
          style={{ width: 32, height: 32 }}
        />

        <Text className="text-white-main text-3xl font-poppins">
          {props.children.temp}°C
        </Text>
      </View>

      <Text className="text-gray-1 font-poppins text-center">
        Sensação Térmica: {props.children.feels_like}°C
      </Text>
    </View>
  );
}
