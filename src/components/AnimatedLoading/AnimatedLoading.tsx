import { View, Text } from "react-native";
import { LoadingBar } from "./LoadingBar";

export function AnimatedLoading() {
  return (
    <View className="flex-1 items-center justify-center bg-black-main">
      <Text className="absolute z-10 text-white-main text-3xl font-bold">
        Carregando...
      </Text>

      <LoadingBar />
    </View>
  );
}
