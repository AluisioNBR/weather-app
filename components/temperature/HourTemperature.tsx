import { Pressable, View, Text, Image } from 'react-native'
import { useState } from 'react'
import { useFonts } from 'expo-font';

import { HourTemperatureStyles } from '../../styles/temperature/HourTemperature.styles';
import { AppColors } from '../../styles/AppColors';

import { useNavigation } from '@react-navigation/native';
import { AppNavigationType } from '../../types/App.types';

import type {
	HourTemperatureProps,
	HourButtonProps
} from '../../types/components/temperatures/hourlyTemperatures.types'


export function HourTemperature({ children }: HourTemperatureProps){
	const navigation = useNavigation<AppNavigationType>()
	const [loaded] = useFonts({
		'Poppins': require('../../assets/Poppins/Poppins-Regular.ttf'),
	})

	const [buttonBackground, setButtonBackground] = useState(AppColors.Black1)

	const onButtonPress = () => navigation.navigate('HourDetails', children)
	const onButtonPressIn = () => setButtonBackground(AppColors.Black3)
	const onButtonPressOut = () => setButtonBackground(AppColors.Black1)
	
	return (
		<Pressable
			onPress={onButtonPress}
			onPressIn={onButtonPressIn}
			onPressOut={onButtonPressOut}
		>
			<HourButton background={buttonBackground}>
				{children}
			</HourButton>
		</Pressable>
	)
}

function HourButton(props: HourButtonProps){
	return (
		<View style={[
			HourTemperatureStyles.HourButton,
			{ backgroundColor: props.background }
		]}>
			<Text style={HourTemperatureStyles.HourID}>
				{props.children.hour}
			</Text>
			
			<View style={HourTemperatureStyles.HourButtonContent}>
				<Image
					source={{ uri: props.children.icon }}
					style={{ width: 32, height: 32}}
				/>

				<Text style={HourTemperatureStyles.TempForHour}>
					{props.children.temp}°C
				</Text>
			</View>
			
			<Text style={HourTemperatureStyles.FeelsLikeForHour}>
				Sensação Térmica: {props.children.feels_like}°C
			</Text>
		</View>
	)
}