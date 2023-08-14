import { useFonts } from "expo-font";
import { useState } from "react";
import { Pressable, View, Text } from "react-native";
import { submitCity } from "../../../../components/functions/submitCity/submitCity";
import { SubmitButtonProps } from "../../types/CitySelection.types";
import colors from "../../../../../colors";

export function SubmitButton({ children }: SubmitButtonProps) {
  const [loaded] = useFonts({
    Poppins: require("../assets/Poppins/Poppins-Regular.ttf"),
  });

  const [buttonColor, setButtonColor] = useState(colors.black[3]);

  const { cityValue, setCityValue, citySelectionProps } = children;

  function onPressPressable() {
    citySelectionProps.setLoadingWeather(true);
    submitCity({ cityValue, setCityValue, citySelectionProps });
  }

  const onPressInPressable = () => setButtonColor(colors.gray[3]);
  const onPressOutPressable = () => setButtonColor(colors.black[3]);

  return (
    <Pressable
      onPress={onPressPressable}
      onPressIn={onPressInPressable}
      onPressOut={onPressOutPressable}
    >
      <View
        style={{ backgroundColor: buttonColor }}
        className="p-2 rounded-full"
      >
        <Text className="text-white-main text-lg font-poppins">Selecionar</Text>
      </View>
    </Pressable>
  );
}
