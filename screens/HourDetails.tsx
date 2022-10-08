import { useState } from 'react'
import { useFonts } from 'expo-font';
import { Pressable, View, Text } from 'react-native'

import { MainTemperature } from '../components/temperature/MainTemperature'
import { CompostTemperatureDetails } from '../components/temperature/CompostTemperatureDetails'

import { HourDetailsStyles } from '../styles/screens/HourDetails.styles';
import { AppColors } from '../styles/AppColors';

import type { ReturnButtonProps } from '../types/components/temperatures/hourlyTemperatures.types'

import { useNavigation, useRoute } from '@react-navigation/native';
import { AppNavigationRouteType, AppNavigationType } from '../types/App.types';

import { HourWeather } from '../types/components/submitCity/weatherStateReducer.types';

export function HourDetails(){
	const navigation = useNavigation<AppNavigationType>()
	const route = useRoute<AppNavigationRouteType>()

	const [loaded] = useFonts({
		'Poppins': require('../assets/Poppins/Poppins-Regular.ttf'),
	})

	const params = route.params as HourWeather

	const [returnButtonBackGround, setReturnButtonBackground] = useState(AppColors.Black1)

	const onCloseModalPress = () => navigation.goBack()
	const onCloseModalPressIn = () => setReturnButtonBackground(AppColors.Black3)
	const onCloseModalPressOut = () => setReturnButtonBackground(AppColors.Black2)

	return(
		<View style={HourDetailsStyles.Container}>
			<View style={HourDetailsStyles.Content}>
				<Text style={HourDetailsStyles.HourID}>
					Às {params.hour}
				</Text>

				<MainTemperature
					icon={params.icon}
					temperature={String(params.temp)}
					feels_like={String(params.feels_like)}
					description={params.description}
					descriptionSize={2}
				/>
			
				<CompostTemperatureDetails>
					{params}
				</CompostTemperatureDetails>
		
				<Pressable
					onPress={onCloseModalPress}
					onPressIn={onCloseModalPressIn}
					onPressOut={onCloseModalPressOut}
				>
					<ReturnButton background={returnButtonBackGround}/>
				</Pressable>
			</View>
		</View>
	)
}

function ReturnButton(props: ReturnButtonProps) {
	return (
		<View style={[
			HourDetailsStyles.ReturnButton,
			{ backgroundColor: props.background }
		]}>
			<Text style={HourDetailsStyles.ReturnButtonText}>
				Fechar
			</Text>
		</View>
	)
}