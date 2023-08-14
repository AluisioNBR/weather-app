import { ParamListBase, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { DayTemperatureProps } from "../screens/DayDetails/types/DailyTemperatures.types";
import { HourWeather } from "../components/statements/types/HourWeather.types";

export type AppNavigationType = NativeStackNavigationProp<
  AppStackType,
  "Home",
  "HourDetails"
>;

export type AppNavigationRouteType = RouteProp<AppStackType>;

export interface AppStackType extends ParamListBase {
  Home: undefined;
  HourDetails: HourWeather;
  DayDetails: DayTemperatureProps;
}
