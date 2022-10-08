import { View, Text } from 'react-native';

import type {
  TemperatureDetailsProps,
  TemperatureDetailsOnPreciptationProps,
  TemperatureDetailsOnClearWeatherProps
} from '../../types/components/temperatures/details.types'
import { AmountOfRain, AmountOfSnow } from '../../types/components/submitCity/weatherStateReducer.types';

import { TemperatureDetailsStyles } from '../../styles/temperature/details.styles';

export function TemperatureDetails(props: TemperatureDetailsProps) {
  if(isRainy(props.rain.rainy)){
    const amountOfRain = props.rain as AmountOfRain
    return (
      <TemperatureDetailsOnPreciptation
        humidity={`${props.humidity}%`}
        uvi={`${props.uvi}%`}
        preciptation={`${amountOfRain.rain}mm`}
      >
        Chuva
      </TemperatureDetailsOnPreciptation>
    )
  }
  else if(isSnowing(props.snow.snowed)){
    const amountOfSnow = props.snow as AmountOfSnow
    return (
      <TemperatureDetailsOnPreciptation
        humidity={`${props.humidity}%`}
        uvi={`${props.uvi}%`}
        preciptation={`${amountOfSnow.snow}mm`}
      >
        Neve
      </TemperatureDetailsOnPreciptation>
    )
  }
  else
    return (
      <TemperatureDetailsOnClearWeather
        humidity={`${props.humidity}%`}
        uvi={`${props.uvi}%`}
      />
    );
}

function isRainy(rainy: string) {
  return rainy === "rain"
}

function isSnowing(snowing: string) {
  return snowing === "rain"
}

function TemperatureDetailsOnPreciptation(
  props: TemperatureDetailsOnPreciptationProps
){
  return (
    <View style={[
      { alignItems: 'center' },
      TemperatureDetailsStyles.ContainterDetails
    ]}>
        <View style={TemperatureDetailsStyles.TemperatureDetails}>
          <Text style={TemperatureDetailsStyles.InformationDetail}>
            Umidade: {props.humidity}
          </Text>
          
          <Text style={TemperatureDetailsStyles.InformationDetail}>
            Índice UV: {props.uvi}
          </Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Text style={TemperatureDetailsStyles.InformationDetail}>
            {props.children}: {props.preciptation}
          </Text>
        </View>
      </View>
  )
}

function TemperatureDetailsOnClearWeather(props: TemperatureDetailsOnClearWeatherProps) {
  return (
    <View style={[
      TemperatureDetailsStyles.TemperatureDetails,
      TemperatureDetailsStyles.ContainterDetails
    ]}>
      <Text style={TemperatureDetailsStyles.InformationDetail}>
        Umidade: {props.humidity}
      </Text>
      
      <Text style={TemperatureDetailsStyles.InformationDetail}>
        Índice UV: {props.uvi}
      </Text>
    </View>
  )
}