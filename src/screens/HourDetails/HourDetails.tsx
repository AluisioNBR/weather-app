import { useState } from "react";
import { useFonts } from "expo-font";
import { Pressable, View, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CompostTemperatureDetails } from "../../components/CompostTemperatureDetails";
import { MainTemperature } from "../../components/MainTemperature/MainTemperature";
import { HourWeather } from "../../components/statements/types/HourWeather.types";
import {
  AppNavigationType,
  AppNavigationRouteType,
} from "../../types/App.types";
import { ReturnButton } from "./component/ReturnButton";
import colors from "../../../colors";

export function HourDetails() {
  const navigation = useNavigation<AppNavigationType>();
  const route = useRoute<AppNavigationRouteType>();

  const [loaded] = useFonts({
    Poppins: require("../assets/Poppins/Poppins-Regular.ttf"),
  });

  const params = route.params as HourWeather;

  const [returnButtonBackGround, setReturnButtonBackground] = useState(
    colors.black[2]
  );

  const onCloseModalPress = () => navigation.goBack();
  const onCloseModalPressIn = () => setReturnButtonBackground(colors.black[3]);
  const onCloseModalPressOut = () => setReturnButtonBackground(colors.black[2]);

  return (
    <View className="flex-1 bg-black-main items-center justify-center">
      <View className="items-center">
        <Text className="font-poppins text-3xl text-white-main">
          Às {params.hour}
        </Text>

        <MainTemperature
          icon={params.icon}
          temperature={String(params.temp)}
          feels_like={String(params.feels_like)}
          description={params.description}
          descriptionSize={2}
        />

        <CompostTemperatureDetails>{params}</CompostTemperatureDetails>

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
