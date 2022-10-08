import { Pressable, View, Text, Image } from 'react-native'
import { useState } from 'react'
import { useFonts } from 'expo-font';

import { DayTemperatureStyles } from '../../styles/temperature/DayTemperature.styles';
import { AppColors } from '../../styles/AppColors';

import type {
	DayTemperatureProps,
	DayButtonProps
} from '../../types/components/temperatures/dailyTemperatures.types'
import { useNavigation } from '@react-navigation/native';
import { AppNavigationType } from '../../types/App.types';

export function DayTemperature(props: DayTemperatureProps) {
	const navigation = useNavigation<AppNavigationType>()
	const [loaded] = useFonts({
	    'Poppins': require('../../assets/Poppins/Poppins-Regular.ttf'),
	})
	const [buttonBackground, setButtonBackground] = useState(AppColors.Black1)

	const onButtonPress = () => navigation.navigate('DayDetails', props)
	const onButtonPressIn = () => setButtonBackground(AppColors.Black3)
	const onButtonPressOut = () => setButtonBackground(AppColors.Black1)

	return (
		<Pressable
			onPress={onButtonPress}
			onPressIn={onButtonPressIn}
			onPressOut={onButtonPressOut}
		>
			<DayButton
				background={buttonBackground}
				date={props.date}
			>
				{props.children}
			</DayButton>
		</Pressable>
	)
}

function DayButton(props: DayButtonProps){
	return (
		<View style={[
				DayTemperatureStyles.DayButton,
				{ backgroundColor: props.background }
			]}>
			<Text style={DayTemperatureStyles.DayID}>
				{props.date}
			</Text>

			<View style={DayTemperatureStyles.DayButtonContent}>
				<Image
					source={{ uri: props.children.icon }}
					style={{ width: 32, height: 32 }}
				/>

				<Text style={DayTemperatureStyles.TempForDay}>
					{props.children.temp.min}°C - {props.children.temp.max}°C
				</Text>
			</View>
		</View>
	)
}