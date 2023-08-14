import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DayDetails } from "./src/screens/DayDetails/DayDetails";
import { Home } from "./src/screens/Home/Home";
import { HourDetails } from "./src/screens/HourDetails/HourDetails";
import { AppStackType } from "./src/types/App.types";

const AppStack = createNativeStackNavigator<AppStackType>();

export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="HourDetails" component={HourDetails} />
        <AppStack.Screen name="DayDetails" component={DayDetails} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
