import { Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';

import { MainTemperature } from './temperature/MainTemperature'
import { TemperatureDetails } from './temperature/TemperatureDetails'

import { CurrentTemperatureStyles } from '../styles/CurrentTemperature.styles';

import type {
  CurrentTemperatureProps,
  LocalizationProps
} from '../types/components/CurrentTemperature.types'

function CurrentTemperature(props: CurrentTemperatureProps) {
  const [loaded] = useFonts({
    'Poppins': require('../assets/Poppins/Poppins-Regular.ttf'),
  })

  if(props.visibility)
    return (
      <View style={CurrentTemperatureStyles.Container}>
        <Localization
          city={props.city}
          state={props.state}
        />

        <MainTemperature
          icon={props.children.icon}
          temperature={String(props.children.temp)}
          feels_like={String(props.children.feels_like)}
          description={props.children.description}
        />

        <TemperatureDetails
          humidity={props.children.humidity}
          uvi={props.children.uvi}
          rain={props.children.rain}
          snow={props.children.snow}
        />
      </View>
    );

  else
    return (
      <View style={CurrentTemperatureStyles.Container}>
        <Text style={CurrentTemperatureStyles.TextualContent}>
          {props.msg}
        </Text>
      </View>
    );
}

function Localization(props: LocalizationProps){
  const [loaded] = useFonts({
    'Poppins': require('../assets/Poppins/Poppins-Regular.ttf'),
  })
  return (
    <View style={CurrentTemperatureStyles.LocalizationContainer}>
      <Image
        style={{ width: 32, height: 32 }}
        source={require("../assets/pin-localization.png")}
      />

      <Text style={CurrentTemperatureStyles.TextualContent}>
        {props.city}, {props.state}
      </Text>
    </View>
  )
}

export { CurrentTemperature };