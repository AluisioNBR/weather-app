import { TemperatureDetails } from './TemperatureDetails'
import { View, Text } from 'react-native'
import { useFonts } from 'expo-font';

import { CompostTemperatureDetailsStyle } from '../../styles/temperature/CompostTemperatureDetails.style';
import type { CompostTemperatureDetailsProps } from '../../types/components/temperatures/details.types'

export function CompostTemperatureDetails({ children }: CompostTemperatureDetailsProps){
	const [loaded] = useFonts({
    'Poppins': require('../../assets/Poppins/Poppins-Regular.ttf'),
  })
	return(
		<View>
			<TemperatureDetails
				humidity={children.humidity}
        uvi={children.uvi}
        rain={children.rain}
        snow={children.snow}
			/>
			
			<View style={CompostTemperatureDetailsStyle.PrecipitationContainer}>
        <Text style={CompostTemperatureDetailsStyle.PrecipitationText}>
          Precipitação: {`${children.pop}%`}
        </Text>
			</View>
		</View>
	)
}