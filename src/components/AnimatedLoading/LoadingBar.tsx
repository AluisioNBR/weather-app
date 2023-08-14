import { View } from "react-native";

import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../../../colors";

export function LoadingBar() {
  const rotate = {
    from: {
      transform: [{ rotate: `${0}deg` }],
    },
    to: {
      transform: [{ rotate: `${360}deg` }],
    },
  };

  return (
    <Animatable.View
      animation={rotate}
      iterationCount={Infinity}
      duration={1000}
      style={{ padding: 32 }}
    >
      <LinearGradient
        colors={[colors.gray[2], colors.black[2]]}
        className="w-56 h-56 rounded-full items-center justify-center"
      >
        <View className="w-52 h-52 rounded-full bg-black-main items-center justify-center"></View>
      </LinearGradient>
    </Animatable.View>
  );
}
