import { Pressable } from "react-native";
import { useState } from "react";
import { useFonts } from "expo-font";

import type { DayTemperatureProps } from "../../../DayDetails/types/DailyTemperatures.types";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationType } from "../../../../types/App.types";
import colors from "../../../../../colors";
import { DayButton } from "./DayButton";

export function DayTemperature(props: DayTemperatureProps) {
  const navigation = useNavigation<AppNavigationType>();
  const [loaded] = useFonts({
    Poppins: require("../../assets/Poppins/Poppins-Regular.ttf"),
  });
  const [buttonBackground, setButtonBackground] = useState(colors.black[1]);

  const onButtonPress = () => navigation.navigate("DayDetails", props);
  const onButtonPressIn = () => setButtonBackground(colors.black[3]);
  const onButtonPressOut = () => setButtonBackground(colors.black[1]);

  return (
    <Pressable
      onPress={onButtonPress}
      onPressIn={onButtonPressIn}
      onPressOut={onButtonPressOut}
    >
      <DayButton background={buttonBackground} date={props.date}>
        {props.children}
      </DayButton>
    </Pressable>
  );
}
