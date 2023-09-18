import { Pressable } from "react-native";
import { useState } from "react";
import { useFonts } from "expo-font";

import { useNavigation } from "@react-navigation/native";
import { AppNavigationType } from "../../../types/App.types";
import { HourTemperatureProps } from "../../HourDetails/types/HourlyTemperatures.types";
import colors from "../../../../colors";
import { TemperatureButton } from "../../../components/TemperatureButton";

export function HourTemperature({ children }: HourTemperatureProps) {
  const navigation = useNavigation<AppNavigationType>();
  const [loaded] = useFonts({
    Poppins: require("../../../../assets/Poppins/Poppins-Regular.ttf"),
  });

  const [buttonBackground, setButtonBackground] = useState(colors.gray.opacity);

  const onButtonPress = () => navigation.navigate("HourDetails", children);
  const onButtonPressIn = () => setButtonBackground(colors.black.opacity);
  const onButtonPressOut = () => setButtonBackground(colors.gray.opacity);

  return (
    <Pressable
      onPress={onButtonPress}
      onPressIn={onButtonPressIn}
      onPressOut={onButtonPressOut}
    >
      <TemperatureButton
        temp={children.temp}
        icon={children.icon}
        background={buttonBackground}
        main={children.main}
        hour={Number(children.hour.split(":")[0])}
      >
        {children.hour}
      </TemperatureButton>
    </Pressable>
  );
}
