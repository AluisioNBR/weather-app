import { Text, View } from "react-native";
import { useFonts } from "expo-font";

import { MainTemperatureProps } from "../types/mainTemperature.types";
import { MainDescription } from "./MainDescription";

export function MainTemperature(props: MainTemperatureProps) {
  const [loaded] = useFonts({
    Poppins: require("../../../assets/Poppins/Poppins-Regular.ttf"),
  });

  return (
    <View className="items-center justify-center m-4">
      <View className="items-center justify-center rounded-3xl text-white-main text-xl text-center">
        <MainDescription
          main={props.main}
          icon={props.icon}
          imgSize={props.imgSize}
          descriptionSize={props.descriptionSize}
          hour={props.hour}
        >
          {props.description}
        </MainDescription>

        <View className="flex-row">
          <Text className="font-poppins text-[100px] h-[120px] text-white-main">
            {`${props.temperature}`}
          </Text>
          <Text className="text-3xl text-white-main mt-6">°C</Text>
        </View>
      </View>
    </View>
  );
}
