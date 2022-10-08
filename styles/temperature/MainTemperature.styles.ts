import { StyleSheet } from 'react-native'
import { AppColors } from '../../styles/AppColors';

export const MainTemperatureStyles = StyleSheet.create({
  MainTemperature: {
    alignItems: 'center',
    justifyContent: 'center',

    width: 190,
    height: 150,
    borderRadius: 24,
    
    color: AppColors.MainWhite,
    fontSize: 20,

    textAlign: 'center'
  },

  MainTemperatureContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16
  },

  
  CurrentTemperatureText: {
    fontSize: 54,
    color: AppColors.MainWhite,
    fontFamily: 'Poppins'
  },
  
  CurrentDescription: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },

  WeatherDescription: {
    color: AppColors.MainWhite,
    alignItems: 'center',
    fontFamily: 'Poppins'
  },

  CurrentFeelsLike:{
    fontSize: 14,
    color: AppColors.Gray1,
    fontFamily: 'Poppins'
  }
})