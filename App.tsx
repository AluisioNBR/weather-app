import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackType } from './types/App.types';

import { Home } from './screens/Home';
import { HourDetails } from './screens/HourDetails';
import { DayDetails } from './screens/DayDetails';

const AppStack = createNativeStackNavigator<AppStackType>()

export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
        <AppStack.Screen name='Home' component={Home}/>
        <AppStack.Screen name='HourDetails' component={HourDetails}/>
        <AppStack.Screen name='DayDetails' component={DayDetails}/>
      </AppStack.Navigator>
    </NavigationContainer>
  )
}