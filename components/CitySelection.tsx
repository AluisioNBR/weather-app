import { useState } from "react";
import { useFonts } from 'expo-font';
import { Text, View, Pressable, TextInput } from 'react-native';
import { submitCity } from './submitCity/submitCity'

import { CitySelectionStyles } from "../styles/CitySelection.styles";
import { AppColors } from '../styles/AppColors';

import type {
  CitySelectionProps,
  SubmitButtonProps,
  ContentContext
} from '../types/components/CitySelection.types';

function CitySelection(props: CitySelectionProps) {
  const [fontLoaded] = useFonts({
    'Poppins': require('./../assets/Poppins/Poppins-Regular.ttf'),
  })
  
  const [cityValue, setCityValue] = useState('')
  const contentContext: ContentContext = {
    cityValue,
    setCityValue,
    citySelectionProps: props
  }

  const onInputChangeText = (newText: string) => setCityValue(newText)

  return (
    <View style={CitySelectionStyles.SelectionContainer}>
      <View>
        <Text style={CitySelectionStyles.SelectionLabel}>
          Informe sua cidade:
        </Text>
      </View>

      <TextInput
        style={CitySelectionStyles.SelectionInput}
        defaultValue={cityValue}
        onChangeText={onInputChangeText}
      />

      <SubmitButton>
        {contentContext}
      </SubmitButton>
    </View>
  );
}

function SubmitButton({ children }: SubmitButtonProps){
  const [loaded] = useFonts({
    'Poppins': require('../assets/Poppins/Poppins-Regular.ttf'),
  })
  
  const [buttonColor, setButtonColor] = useState(AppColors.Black3)
  
  const {
    cityValue,
    setCityValue,
    citySelectionProps
  } = children

  function onPressPressable(){
    citySelectionProps.setLoadingWeather(true)
    submitCity({ cityValue, setCityValue, citySelectionProps })
  }

  const onPressInPressable = () => setButtonColor(AppColors.Gray3)
  const onPressOutPressable = () => setButtonColor(AppColors.Black3)

  return (
    <Pressable
      onPress={onPressPressable}
      onPressIn={onPressInPressable}
      onPressOut={onPressOutPressable}
    >
      <View style={[
        { backgroundColor: buttonColor },
        CitySelectionStyles.SubmitButton
      ]}>
        <Text style={CitySelectionStyles.SubmitButtonText}>
          Selecionar
        </Text>
      </View>
    </Pressable>
  )
}

export { CitySelection };