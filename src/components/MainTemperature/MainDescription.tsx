import { View, Text } from "react-native";
import { MainDescriptionProps } from "../types/mainTemperature.types";
import { Clear_2, IconType, IconsEnum } from "../../types/icons.enum";
import colors from "../../../colors";

export function MainDescription(props: MainDescriptionProps) {
  const imgSize = props.imgSize ? props.imgSize : 34;
  const descriptionSize = props.descriptionSize ? props.imgSize : 22;
  const hour = props.hour ? props.hour : new Date().getHours();
  const Icon: IconType =
    props.main != "Clear"
      ? IconsEnum[props.main]
      : props.main == "Clear" && hour < 18 && hour > 5
      ? IconsEnum[props.main]
      : Clear_2;

  return (
    <View className="items-center justify-between gap-1 w-full">
      {Icon ? (
        <Icon width={imgSize} height={imgSize} color={colors.white.main} />
      ) : null}

      <Text
        className="font-poppins items-center text-white-main"
        style={{ fontSize: descriptionSize }}
      >
        {props.children}
      </Text>
    </View>
  );
}
