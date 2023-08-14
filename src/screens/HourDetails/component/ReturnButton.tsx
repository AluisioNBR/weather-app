import { View, Text } from "react-native";
import { ReturnButtonProps } from "../types/HourlyTemperatures.types";

export function ReturnButton(props: ReturnButtonProps) {
  return (
    <View
      style={{ backgroundColor: props.background }}
      className="rounded-full w-36"
    >
      <Text className="font-poppins text-center text-3xl text-white-main">
        Fechar
      </Text>
    </View>
  );
}
