import { Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';

import { MainTemperatureStyles } from '../../styles/temperature/MainTemperature.styles'
import type {
  MainTemperatureProps,
  MainDescriptionProps
} from '../../types/components/temperatures/mainTemperature.types'

function MainTemperature(props: MainTemperatureProps) {
  const [loaded] = useFonts({
    'Poppins': require('../../assets/Poppins/Poppins-Regular.ttf'),
  })
  return (
    <View style={MainTemperatureStyles.MainTemperatureContainer}>
      <View style={MainTemperatureStyles.MainTemperature}>
        <MainDescription icon={props.icon} size={props.descriptionSize}>
          {props.description}
        </MainDescription>

        <View>
          <Text style={MainTemperatureStyles.CurrentTemperatureText}>
            {`${props.temperature}`}°C
          </Text>
        </View>

        <View>
          <Text style={MainTemperatureStyles.CurrentFeelsLike}>
            {`Sensação Térmica: ${props.feels_like}`}°C
          </Text>
        </View>
      </View>
    </View>
  );
}

function MainDescription(props: MainDescriptionProps) {
  const imgSize = props.size == undefined || props.size == 1 ? 34: 52
  const fontSize = props.size == undefined || props.size == 1 ? 22: 28

  return (
    <View style={MainTemperatureStyles.CurrentDescription}>
      <Image
        source={{uri: props.icon}}
        style={{ width: imgSize, height: imgSize}}
      />

      <Text style={[
        MainTemperatureStyles.WeatherDescription,
        { fontSize: fontSize }
      ]}>
        {props.children}
      </Text>
    </View>
  )
}

export { MainTemperature, MainDescription }