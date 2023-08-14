import { useFonts } from "expo-font";
import { View, Text } from "react-native";
import { CompostTemperatureDetails } from "../../../components/CompostTemperatureDetails";
import { MainDescription } from "../../../components/MainTemperature/MainTemperature";
import { DayDetailsInformationsProps } from "../types/DailyTemperatures.types";
import { TemperaturesContainer } from "./TemperaturesContainer";

export function ModalInformations({
  children,
  date,
}: DayDetailsInformationsProps) {
  const [loaded] = useFonts({
    Poppins: require("../assets/Poppins/Poppins-Regular.ttf"),
  });

  return (
    <View>
      <Text className="font-poppins text-3xl text-center text-white-main">
        {date}
      </Text>

      <MainDescription icon={children.icon} size={2}>
        {children.description}
      </MainDescription>

      <TemperaturesContainer>{children}</TemperaturesContainer>

      <CompostTemperatureDetails>{children}</CompostTemperatureDetails>
    </View>
  );
}
