import { View, Text } from "react-native";
import { ProgressBar } from "./ProgressBar";
import colors from "../../../colors";
import { useFonts } from "expo-font";

interface AnimatedLoadingProps {
  children?: string;
  duration?: number;
}

export function AnimatedLoading(props: AnimatedLoadingProps) {
  const [loaded] = useFonts({
    Poppins: require("../../../assets/Poppins/Poppins-Regular.ttf"),
  });

  return (
    <View
      className="w-full h-full justify-center items-center bg-black-main"
      style={{ gap: 16 }}
    >
      <ProgressBar
        barColor={colors.black[1]}
        duration={props.duration ? props.duration : 1000}
      />

      <Text
        className={"font-poppins text-center text-white-main text-2xl w-96"}
      >
        {props.children ? props.children : "Carregando..."}
      </Text>
    </View>
  );
}
