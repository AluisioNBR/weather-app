import { View, Text } from "react-native";
import { TemperatureButtonProps } from "./types/TemperatureButton.types";
import colors from "../../colors";
import { IconType, IconsEnum, Clear_2 } from "../types/icons.enum";

export function TemperatureButton(props: TemperatureButtonProps) {
  const Icon: IconType =
    props.main != "Clear"
      ? IconsEnum[props.main]
      : props.main == "Clear" && props.hour < 18 && props.hour > 5
      ? IconsEnum[props.main]
      : Clear_2;

  const tempDisplay =
    typeof props.temp == "number" ? (
      <View className="flex-row">
        <Text className="font-poppins text-xl text-white-main">
          {`${props.temp}`}
        </Text>
        <Text className="text-sm text-white-main">°C</Text>
      </View>
    ) : (
      <View className="flex-row">
        <View className="flex-row">
          <Text className="font-poppins text-xl text-white-main">
            {`${props.temp[0]}`}
          </Text>
          <Text className="text-sm text-white-main">°C</Text>
        </View>

        <Text className="font-poppins text-xl text-white-main"> - </Text>

        <View className="flex-row">
          <Text className="font-poppins text-xl text-white-main">
            {`${props.temp[1]}`}
          </Text>
          <Text className="text-sm text-white-main">°C</Text>
        </View>
      </View>
    );

  return (
    <View
      style={{ backgroundColor: props.background }}
      className="items-center justify-evenly mx-2 p-3 rounded-md w-28 h-40"
    >
      <Text className="text-white-main text-lg font-poppins">
        {props.children}
      </Text>

      <View className="p-2">
        {Icon ? (
          <Icon width={64} height={64} color={colors.white.main} />
        ) : null}
      </View>

      {tempDisplay}
    </View>
  );
}
