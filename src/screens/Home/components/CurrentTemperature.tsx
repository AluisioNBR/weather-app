import { Text, View } from "react-native";
import { useFonts } from "expo-font";

import { MainTemperature } from "../../../components/MainTemperature/MainTemperature";
import { TemperatureDetails } from "../../../components/TemperatureDetails/TemperatureDetails";

import type { CurrentTemperatureProps } from "../types/CurrentTemperature.types";
import { AnimatedLoading } from "../../../components/AnimatedLoading/AnimatedLoading";

export function CurrentTemperature(props: CurrentTemperatureProps) {
  const [loaded] = useFonts({
    Poppins: require("../../../../assets/Poppins/Poppins-Regular.ttf"),
  });

  if (props.visibility)
    return (
      <View className="m-4 items-center">
        <MainTemperature
          main={props.children.main}
          icon={props.children.icon}
          temperature={String(props.children.temp)}
          description={props.children.description}
          imgSize={100}
        />

        <TemperatureDetails
          feels_like={String(props.children.feels_like)}
          humidity={props.children.humidity}
          uvi={props.children.uvi}
          rain={props.children.rain}
          snow={props.children.snow}
        />
      </View>
    );
  else
    return (
      <View className="m-16 items-center justify-center">
        {props.msg.duration == 0 ? (
          <Text className="font-poppins text-2xl text-white-main text-center">
            {props.msg.msg}
          </Text>
        ) : (
          <AnimatedLoading duration={props.msg.duration}>
            {props.msg.msg}
          </AnimatedLoading>
        )}
      </View>
    );
}
