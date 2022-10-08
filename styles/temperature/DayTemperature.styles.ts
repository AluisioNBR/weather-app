import { StyleSheet } from "react-native";
import { AppColors } from '../AppColors';

const DayTemperatureStyles = StyleSheet.create({
  DayButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    
    marginBottom: 4,
    marginRight: 8,
    marginLeft: 8,
    padding: 12,
    borderRadius: 10
  },

  DayID: {
    color: AppColors.MainWhite,
    fontSize: 18,
    fontFamily: 'Poppins'
  },

  DayButtonContent: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  TempForDay: {
    color: AppColors.MainWhite,
    fontSize: 18,
    fontFamily: 'Poppins'
  }
})

export { DayTemperatureStyles }