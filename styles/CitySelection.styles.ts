import { StyleSheet } from "react-native";
import { AppColors } from './AppColors';

const CitySelectionStyles = StyleSheet.create({
  SelectionContainer: {
    alignItems: 'center'
  },
  
  SelectionLabel: {
    color: AppColors.MainWhite,
    fontSize: 20,
    fontFamily: 'Poppins'
  },

  SelectionInput: {
    fontFamily: 'Poppins',
    fontSize: 20,
    padding: 8,
    backgroundColor: AppColors.MainWhite,
    width: 300
  },

  SubmitButton: {
    padding: 8,
    borderRadius: 50
  },

  SubmitButtonText: {
    color: AppColors.MainWhite,
    fontSize: 18,
    fontFamily: 'Poppins'
  }
})

export { CitySelectionStyles }