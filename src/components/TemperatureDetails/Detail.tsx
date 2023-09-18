import { View, Text } from "react-native";

interface DetailProps {
  title: string;
  children: string | string[];
}

export function Detail(props: DetailProps) {
  return (
    <View className="flex-row items-center justify-between w-[85%]">
      <Text className="font-poppins text-sm text-white-main mx-2">
        {props.title}:
      </Text>

      <Text className="font-poppins text-sm text-white-main mx-2">
        {props.children}
      </Text>
    </View>
  );
}
