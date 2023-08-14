import { TemperatureDetails } from "./TemperatureDetails/TemperatureDetails";
import { View, Text } from "react-native";
import { useFonts } from "expo-font";
import { CompostTemperatureDetailsProps } from "./types/details.types";

export function CompostTemperatureDetails({
  children,
}: CompostTemperatureDetailsProps) {
  const [loaded] = useFonts({
    Poppins: require("../../assets/Poppins/Poppins-Regular.ttf"),
  });
  return (
    <View>
      <TemperatureDetails
        humidity={children.humidity}
        uvi={children.uvi}
        rain={children.rain}
        snow={children.snow}
      />

      <View className="items-center">
        <Text className="font-poppins m-2 text-sm text-gray-1">
          Precipitação: {`${children.pop}%`}
        </Text>
      </View>
    </View>
  );
}
