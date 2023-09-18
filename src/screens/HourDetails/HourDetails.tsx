import { useState } from "react";
import { useFonts } from "expo-font";
import { Pressable, View, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MainTemperature } from "../../components/MainTemperature/MainTemperature";
import { HourWeather } from "../../components/statements/types/HourWeather.types";
import {
  AppNavigationType,
  AppNavigationRouteType,
} from "../../types/App.types";
import { ReturnButton } from "./component/ReturnButton";
import colors from "../../../colors";
import { TemperatureDetailsOnPreciptation } from "../../components/TemperatureDetails/TemperatureDetailsOnPreciptation";

export function HourDetails() {
  const navigation = useNavigation<AppNavigationType>();
  const route = useRoute<AppNavigationRouteType>();

  const [loaded] = useFonts({
    Poppins: require("../../../assets/Poppins/Poppins-Regular.ttf"),
  });

  const params = route.params as HourWeather;

  const [returnButtonBackGround, setReturnButtonBackground] = useState(
    colors.gray.opacity
  );

  const onCloseModalPress = () => navigation.goBack();
  const onCloseModalPressIn = () =>
    setReturnButtonBackground(colors.black.opacity);
  const onCloseModalPressOut = () =>
    setReturnButtonBackground(colors.gray.opacity);
  return (
    <View className="flex-1 bg-black-main items-center justify-center">
      <View className="items-center">
        <Text className="font-poppins text-3xl text-white-main">
          Às {params.hour}
        </Text>

        <MainTemperature
          main={params.main}
          icon={params.icon}
          temperature={String(params.temp)}
          description={params.description}
          imgSize={100}
          hour={Number(params.hour.split(":")[0])}
        />

        <View className="m-4 mb-6 w-[85%]">
          <TemperatureDetailsOnPreciptation
            feels_like=""
            humidity={`${params.humidity}%`}
            uvi={`${params.uvi}%`}
            preciptation={`${params.pop}%`}
          >
            Precipitação
          </TemperatureDetailsOnPreciptation>
        </View>

        <Pressable
          onPress={onCloseModalPress}
          onPressIn={onCloseModalPressIn}
          onPressOut={onCloseModalPressOut}
        >
          <ReturnButton background={returnButtonBackGround} />
        </Pressable>
      </View>
    </View>
  );
}
