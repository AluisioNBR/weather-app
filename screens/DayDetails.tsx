import { useState } from 'react'
import { useFonts } from 'expo-font';
import { Pressable, View, Text, Image } from 'react-native'

import { CompostTemperatureDetails } from '../components/temperature/CompostTemperatureDetails'
import { MainDescription } from '../components/temperature/MainTemperature'
import { AppColors } from '../styles/AppColors';

import * as DailyTemperatureTypes from '../types/components/temperatures/dailyTemperatures.types'
import { DayDetailsStyles } from '../styles/screens/DayDetails.styles';

import { useNavigation, useRoute } from '@react-navigation/native';
import { AppNavigationRouteType, AppNavigationType } from '../types/App.types';

export function DayDetails(){
  const navigation = useNavigation<AppNavigationType>()
  const route = useRoute<AppNavigationRouteType>()
  const params = route.params as DailyTemperatureTypes.DayTemperatureProps

  const [loaded] = useFonts({
		'Poppins': require('../assets/Poppins/Poppins-Regular.ttf'),
	})
	const [returnButtonColor, setReturnButtonColor] = useState(AppColors.Black1)

	return(
		<View style={DayDetailsStyles.External}>
			<View style={DayDetailsStyles.Container}>
				<ModalInformations date={params.date}>
					{params.children}
				</ModalInformations>

				<Pressable
					onPress={() => navigation.goBack()}
					onPressIn={() => setReturnButtonColor(AppColors.Black3)}
					onPressOut={() => setReturnButtonColor(AppColors.Black2)}
				>
					<View style={[
						DayDetailsStyles.ReturnButton,
						{ backgroundColor: returnButtonColor }
					]}>
						<Text style={DayDetailsStyles.ReturnButtonText}>
							Fechar
						</Text>
					</View>
				</Pressable>
			</View>
		</View>
	)
}

function ModalInformations({ children, date }: DailyTemperatureTypes.DayDetailsInformationsProps){
	const [loaded] = useFonts({
		'Poppins': require('../assets/Poppins/Poppins-Regular.ttf'),
	})

	return(
		<View>
			<Text style={DayDetailsStyles.InformationsDate}>
				{date}
			</Text>

			<MainDescription icon={children.icon} size={2}>
				{children.description}
			</MainDescription>

			<TemperaturesContainer>
				{children}
			</TemperaturesContainer>

			<CompostTemperatureDetails>
				{children}
			</CompostTemperatureDetails>
		</View>
	)
}

function TemperaturesContainer({ children }: DailyTemperatureTypes.TemperaturesContainerProps) {
	const instants: DailyTemperatureTypes.instantsType[] = ['morn', 'day', 'eve', 'night']
	const temps = instants.map((instant: DailyTemperatureTypes.instantsType) => {
		return (
			<InformationByDayInstants key={instant} dayWeather={children}>
				{instant}
			</InformationByDayInstants>
		)
	})

	return (
		<View style={{ margin: 2 }}>
			<MinMaxTemps
				max={children.temp.max}
				min={children.temp.min}
			/>

			<View style={{ flexDirection: 'row' }}>
				{temps}
			</View>
		</View>
	)
}

function MinMaxTemps(props: DailyTemperatureTypes.MinMaxContainerProps){
	return (
		<View style={DayDetailsStyles.InformationsMinMaxContainer}>
			<MinMaxText value={props.max}>Máxima</MinMaxText>
			<MinMaxText value={props.min}>Mínima</MinMaxText>
		</View>
	)
}

function MinMaxText(props: DailyTemperatureTypes.MinMaxTextProps){
	return (
		<Text style={DayDetailsStyles.InformationsMinMaxText}>
			{props.children}: {props.value}°C
		</Text>
	)
}

function InformationByDayInstants(props: DailyTemperatureTypes.InformationByDayInstantsProps){
	return (
		<View style={DayDetailsStyles.InformationByDayInstantsContainer}>
			<Text style={DayDetailsStyles.InformationDayInstant}>
				{DailyTemperatureTypes.InstantsEnum[props.children]}
			</Text>

			<Text style={DayDetailsStyles.DayTempByInstant}>
				{props.dayWeather.temp[props.children]}°C
			</Text>

			<Text style={DayDetailsStyles.DayFeelsLikeByInstant}>
				{props.dayWeather.feels_like[props.children]}°C
			</Text>				
		</View>
	)
}