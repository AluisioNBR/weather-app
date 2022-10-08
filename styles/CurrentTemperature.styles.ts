import { StyleSheet } from "react-native";
import { AppColors } from './AppColors';

const CurrentTemperatureStyles = StyleSheet.create({
  Container: {
    margin: 16,
    alignItems: 'center'
  },

  LocalizationContainer: {
    alignItems: 'center',
    flexDirection: 'row'
  },

  TextualContent: {
    fontFamily: 'Poppins',
    textAlign: 'center',
    color: AppColors.MainWhite,
    fontSize: 22
  }
})

export { CurrentTemperatureStyles }