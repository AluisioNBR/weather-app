import { StyleSheet } from "react-native";
import { AppColors } from '../AppColors';

export const HourDetailsStyles = StyleSheet.create({
  Container: {
    backgroundColor: AppColors.MainBlack,
    
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  Content: {  
    alignItems: 'center'
  },

  HourID: {
    fontFamily: 'Poppins',
    fontSize: 32,
    color: AppColors.MainWhite,
  },

  ReturnButton: {
    borderRadius: 50,
    width: 150
  },

  ReturnButtonText: {
    color: AppColors.MainWhite,
    fontSize: 28,
    textAlign: 'center',
    fontFamily: 'Poppins'
  }
})