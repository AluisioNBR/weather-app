import { useState } from "react";
import { useFonts } from "expo-font";
import { Pressable, View, Text } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import {
  AppNavigationRouteType,
  AppNavigationType,
} from "../../types/App.types";
import colors from "../../../colors";
import { ModalInformations } from "./components/ModalInformations";
import { DayTemperatureProps } from "./types/DailyTemperatures.types";

export function DayDetails() {
  const navigation = useNavigation<AppNavigationType>();
  const route = useRoute<AppNavigationRouteType>();
  const params = route.params as DayTemperatureProps;

  const [loaded] = useFonts({
    Poppins: require("../assets/Poppins/Poppins-Regular.ttf"),
  });
  const [returnButtonColor, setReturnButtonColor] = useState(colors.black[2]);

  return (
    <View className="flex-1 bg-black-main items-center, justify-center">
      <View className="items-center">
        <ModalInformations date={params.date}>
          {params.children}
        </ModalInformations>

        <Pressable
          onPress={() => navigation.goBack()}
          onPressIn={() => setReturnButtonColor(colors.black[3])}
          onPressOut={() => setReturnButtonColor(colors.black[2])}
        >
          <View
            style={{ backgroundColor: returnButtonColor }}
            className="rounded-full w-36"
          >
            <Text className="font-poppins text-white-main text-3xl text-center">
              Fechar
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}
