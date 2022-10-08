import { StyleSheet } from "react-native";
import { AppColors } from '../AppColors';

export const CompostTemperatureDetailsStyle = StyleSheet.create({
  PrecipitationContainer: { alignItems: 'center' },
  
  PrecipitationText: {
    fontSize: 14,
    color: AppColors.Gray1,
    margin: 8,
    fontFamily: 'Poppins'
  }
})