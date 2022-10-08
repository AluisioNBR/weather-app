import { ParamListBase, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HourWeather } from './components/submitCity/weatherStateReducer.types';
import { DayTemperatureProps } from './components/temperatures/dailyTemperatures.types';

type AppNavigationType = NativeStackNavigationProp<AppStackType, 'Home', 'HourDetails'>

type AppNavigationRouteType = RouteProp<AppStackType>

interface AppStackType extends ParamListBase {
  Home: undefined,
  HourDetails: HourWeather,
  DayDetails: DayTemperatureProps
}

export { AppStackType, AppNavigationType, AppNavigationRouteType }