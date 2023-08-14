import { Text, View, Image } from "react-native";
import { useFonts } from "expo-font";

import { MainTemperature } from "../../../components/MainTemperature/MainTemperature";
import { TemperatureDetails } from "../../../components/TemperatureDetails/TemperatureDetails";

import type {
  CurrentTemperatureProps,
  LocalizationProps,
} from "../types/CurrentTemperature.types";

function CurrentTemperature(props: CurrentTemperatureProps) {
  const [loaded] = useFonts({
    Poppins: require("../assets/Poppins/Poppins-Regular.ttf"),
  });

  if (props.visibility)
    return (
      <View className="m-4 items-center">
        <Localization city={props.city} state={props.state} />

        <MainTemperature
          icon={props.children.icon}
          temperature={String(props.children.temp)}
          feels_like={String(props.children.feels_like)}
          description={props.children.description}
        />

        <TemperatureDetails
          humidity={props.children.humidity}
          uvi={props.children.uvi}
          rain={props.children.rain}
          snow={props.children.snow}
        />
      </View>
    );
  else
    return (
      <View className="m-4 items-center">
        <Text className="font-poppins text-2xl">{props.msg}</Text>
      </View>
    );
}

function Localization(props: LocalizationProps) {
  const [loaded] = useFonts({
    Poppins: require("../assets/Poppins/Poppins-Regular.ttf"),
  });
  return (
    <View className="flex-row items-center">
      <Image
        style={{ width: 32, height: 32 }}
        source={require("../assets/pin-localization.png")}
      />

      <Text className="font-poppins text-2xl">
        {props.city}, {props.state}
      </Text>
    </View>
  );
}

export { CurrentTemperature };
