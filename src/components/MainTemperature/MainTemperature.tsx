import { Text, View } from "react-native";
import { useFonts } from "expo-font";

import { MainTemperatureProps } from "../types/mainTemperature.types";
import { MainDescription } from "./MainDescription";

export function MainTemperature(props: MainTemperatureProps) {
  const [loaded] = useFonts({
    Poppins: require("../../assets/Poppins/Poppins-Regular.ttf"),
  });

  return (
    <View className="items-center justify-center m-4">
      <View className="items-center justify-center w-48 h-36 rounded-3xl text-white-main text-xl text-center">
        <MainDescription icon={props.icon} size={props.descriptionSize}>
          {props.description}
        </MainDescription>

        <View>
          <Text className="font-poppins text-5xl text-white-main">
            {`${props.temperature}`}°C
          </Text>
        </View>

        <View>
          <Text className="font-poppins text-sm text-gray-1">
            {`Sensação Térmica: ${props.feels_like}`}°C
          </Text>
        </View>
      </View>
    </View>
  );
}
