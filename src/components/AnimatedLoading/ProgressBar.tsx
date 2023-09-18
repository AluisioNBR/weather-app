import { View } from "react-native";
import Animated from "react-native-reanimated";
import { ProgressBarProps } from "./types/ProgressBarProps.interface";
import { Keyframe } from "react-native-reanimated";

const loadingAnim = new Keyframe({
  from: {
    width: 0,
  },
  to: {
    width: 256,
  },
});

export function ProgressBar(props: ProgressBarProps) {
  return (
    <View className="w-64 h-2 bg-gray-300 border-gray-300 border-2 justify-start overflow-hidden rounded-full">
      <Animated.View
        entering={loadingAnim.duration(props.duration)}
        className="p-8 justify-center items-center"
        style={{ backgroundColor: props.barColor }}
      ></Animated.View>
    </View>
  );
}
