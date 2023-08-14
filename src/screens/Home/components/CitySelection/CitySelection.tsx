import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { Text, View, TextInput } from "react-native";

import type {
  CitySelectionProps,
  ContentContext,
} from "../../types/CitySelection.types";
import { useForegroundPermissions, geocodeAsync } from "expo-location";
import { SubmitButton } from "./SubmitButton";

export function CitySelection(props: CitySelectionProps) {
  const [status, requestPermission] = useForegroundPermissions();
  const [cityValue, setCityValue] = useState("");
  const [fontLoaded] = useFonts({
    Poppins: require("./../assets/Poppins/Poppins-Regular.ttf"),
  });

  useEffect(() => {
    (async () => {
      const res = await requestPermission();
      console.log(res);
      if (res.granted) {
        const geoCode = await geocodeAsync("London");
      }
    })();
  }, []);

  const contentContext: ContentContext = {
    cityValue,
    setCityValue,
    citySelectionProps: props,
  };

  const onInputChangeText = (newText: string) => setCityValue(newText);

  return (
    <View className="items-center">
      <View>
        <Text className="text-white-main text-xl font-poppins">
          Informe sua cidade:
        </Text>
      </View>

      <TextInput
        className="text-white-main text-xl font-poppins p-2 w-80"
        defaultValue={cityValue}
        onChangeText={onInputChangeText}
      />

      <SubmitButton>{contentContext}</SubmitButton>
    </View>
  );
}
