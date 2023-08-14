import { Pressable } from "react-native";
import { useState } from "react";
import { useFonts } from "expo-font";

import { useNavigation } from "@react-navigation/native";
import { AppNavigationType } from "../../../../types/App.types";
import { HourTemperatureProps } from "../../../HourDetails/types/HourlyTemperatures.types";
import colors from "../../../../../colors";
import { HourButton } from "./HourButton";

export function HourTemperature({ children }: HourTemperatureProps) {
  const navigation = useNavigation<AppNavigationType>();
  const [loaded] = useFonts({
    Poppins: require("../../assets/Poppins/Poppins-Regular.ttf"),
  });

  const [buttonBackground, setButtonBackground] = useState(colors.black[1]);

  const onButtonPress = () => navigation.navigate("HourDetails", children);
  const onButtonPressIn = () => setButtonBackground(colors.black[3]);
  const onButtonPressOut = () => setButtonBackground(colors.black[1]);

  return (
    <Pressable
      onPress={onButtonPress}
      onPressIn={onButtonPressIn}
      onPressOut={onButtonPressOut}
    >
      <HourButton background={buttonBackground}>{children}</HourButton>
    </Pressable>
  );
}
