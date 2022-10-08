import { StyleSheet } from "react-native";
import { AppColors } from '../AppColors';

const HourTemperatureStyles = StyleSheet.create({
  HourButton: {           	
    alignItems: 'center',
    justifyContent: 'space-evenly',
    
    marginRight: 8,
    marginLeft: 8,
    padding: 12,
    borderRadius: 40,
    
    width: 165,
    height: 165
  },

  HourID: {
    color: AppColors.MainWhite,
    fontSize: 20,
    fontFamily: 'Poppins'
  },

  HourButtonContent: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  TempForHour: {
    color: AppColors.MainWhite,
    fontSize: 32,
    fontFamily: 'Poppins'
  },

  FeelsLikeForHour: {
    color: AppColors.Gray1,
    fontFamily: 'Poppins',
    textAlign: 'center'
  }
})

export { HourTemperatureStyles }