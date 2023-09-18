import { useEffect, useRef, useState } from "react";
import { useFonts } from "expo-font";
import { View, TextInput } from "react-native";

import type { CitySelectionProps } from "../../types/CitySelection.types";
import {
  useForegroundPermissions,
  getCurrentPositionAsync,
} from "expo-location";
import { submitCity } from "../../../../components/functions/submitCity/submitCity";
import { submitCoords } from "../../../../components/functions/submitCity/submitCoords";

export function CitySelection(props: CitySelectionProps) {
  const [status, requestPermission] = useForegroundPermissions();
  const runCount = useRef(0);
  const [cityValue, setCityValue] = useState("");
  const [fontLoaded] = useFonts({
    Poppins: require("../../../../../assets/Poppins/Poppins-Regular.ttf"),
  });

  useEffect(() => {
    if (runCount.current === 0)
      (async () => {
        const res = await requestPermission();
        if (res.granted) {
          props.setMsgValue({
            msg: "Estamos buscando o clima para a sua localização...",
            duration: 6000,
          });
          const { coords } = await getCurrentPositionAsync();
          const { latitude, longitude } = coords;
          submitCoords({ lat: latitude, lon: longitude }, props);
        }
        runCount.current += 1;
      })();
  }, []);

  function submitEditing() {
    props.setMsgValue({ msg: "", duration: 6000 });
    props.setTemperatureVisibility(false);
    submitCity({ cityValue, setCityValue, citySelectionProps: props });
  }

  const onInputChangeText = (newText: string) => setCityValue(newText);

  return (
    <View className="items-center">
      <TextInput
        className="text-white-main text-xl text-center font-poppins p-2 w-80 bg-[#5555] rounded-full"
        defaultValue={cityValue}
        placeholder={
          props.city ? `${props.city}, ${props.state}` : "Informe sua cidade"
        }
        placeholderTextColor={"#fdfdfd"}
        onChangeText={onInputChangeText}
        onSubmitEditing={submitEditing}
      />
    </View>
  );
}
