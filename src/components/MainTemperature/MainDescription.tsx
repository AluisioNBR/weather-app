import { View, Text, Image } from "react-native";
import { MainDescriptionProps } from "../types/mainTemperature.types";

export function MainDescription(props: MainDescriptionProps) {
  const imgSize = props.size == undefined || props.size == 1 ? 34 : 52;
  const fontSize = props.size == undefined || props.size == 1 ? 22 : 28;

  return (
    <View className="flex-row items-center justify-center">
      <Image
        source={{ uri: props.icon }}
        style={{ width: imgSize, height: imgSize }}
      />

      <Text
        className="font-poppins items-center text-white-main"
        style={{ fontSize: fontSize }}
      >
        {props.children}
      </Text>
    </View>
  );
}
