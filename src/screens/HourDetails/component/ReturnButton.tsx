import { View, Text } from "react-native";
import { ReturnButtonProps } from "../types/HourlyTemperatures.types";

export function ReturnButton(props: ReturnButtonProps) {
  return (
    <View
      style={{ backgroundColor: props.background }}
      className="mt-8 rounded-full w-36 p-2"
    >
      <Text className="font-poppins text-center text-2xl text-white-main">
        Fechar
      </Text>
    </View>
  );
}
