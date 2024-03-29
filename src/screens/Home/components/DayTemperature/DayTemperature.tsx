import { Pressable } from "react-native";
import { useState } from "react";
import { useFonts } from "expo-font";

import type { DayTemperatureProps } from "../../../DayDetails/types/DailyTemperatures.types";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationType } from "../../../../types/App.types";
import colors from "../../../../../colors";
import { DayButton } from "./DayButton";
import { TemperatureButton } from "../../../../components/TemperatureButton";

export function DayTemperature(props: DayTemperatureProps) {
  const navigation = useNavigation<AppNavigationType>();
  const [loaded] = useFonts({
    Poppins: require("../../../../../assets/Poppins/Poppins-Regular.ttf"),
  });
  const [buttonBackground, setButtonBackground] = useState(colors.gray.opacity);

  const onButtonPress = () => navigation.navigate("DayDetails", props);
  const onButtonPressIn = () => setButtonBackground(colors.black.opacity);
  const onButtonPressOut = () => setButtonBackground(colors.gray.opacity);

  return (
    <Pressable
      onPress={onButtonPress}
      onPressIn={onButtonPressIn}
      onPressOut={onButtonPressOut}
    >
      <TemperatureButton
        temp={[props.children.temp.min, props.children.temp.max]}
        icon={props.children.icon}
        background={buttonBackground}
        main={props.children.main}
        hour={12}
      >
        {props.date.split(",")[0]}
      </TemperatureButton>
    </Pressable>
  );
}
