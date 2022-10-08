import { ScrollView } from 'react-native'
import { HourTemperature } from './temperature/HourTemperature'

import type { HourWeather } from '../types/components/submitCity/weatherStateReducer.types'
import type { HourlyTemperaturesContainerProps } from '../types/components/temperatures/hourlyTemperatures.types'

function HourlyTemperaturesContainer(props: HourlyTemperaturesContainerProps){
  let numberKey = 0
  const temperatures = props.children.map(mapTemperatureHours)

  function mapTemperatureHours(hour: HourWeather){
    numberKey += 1
    return (
      <HourTemperature key={`${hour.hour}=${numberKey}`}>
        {hour}
      </HourTemperature>
    )
  }

  return (
    <ScrollView style={{ flex: 1 }} horizontal={true}>
      {temperatures}
    </ScrollView>
  )
}

export { HourlyTemperaturesContainer }