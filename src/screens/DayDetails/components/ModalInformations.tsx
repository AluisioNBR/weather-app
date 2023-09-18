import { useFonts } from "expo-font";
import { View, Text } from "react-native";
import { DayDetailsInformationsProps } from "../types/DailyTemperatures.types";
import { TemperaturesContainer } from "./TemperaturesContainer";
import { MainDescription } from "../../../components/MainTemperature/MainDescription";
import { TemperatureDetailsOnPreciptation } from "../../../components/TemperatureDetails/TemperatureDetailsOnPreciptation";

export function ModalInformations({
  children,
  date,
}: DayDetailsInformationsProps) {
  const [loaded] = useFonts({
    Poppins: require("../../../../assets/Poppins/Poppins-Regular.ttf"),
  });

  return (
    <View className="items-center">
      <Text className="font-poppins text-3xl text-center text-white-main">
        {date}
      </Text>

      <MainDescription
        main={children.main}
        icon={children.icon}
        imgSize={100}
        hour={12}
      >
        {children.description}
      </MainDescription>

      <TemperaturesContainer>{children}</TemperaturesContainer>

      <View className="m-4 w-[85%]">
        <TemperatureDetailsOnPreciptation
          feels_like=""
          humidity={`${children.humidity}%`}
          uvi={`${children.uvi}%`}
          preciptation={`${children.pop}%`}
        >
          Precipitação
        </TemperatureDetailsOnPreciptation>
      </View>
    </View>
  );
}
