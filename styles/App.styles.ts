import { StyleSheet } from "react-native";
import { AppColors } from './AppColors';

const AppStyles = StyleSheet.create({
  AppContainer: {
    flex: 1,
    backgroundColor: AppColors.MainBlack,
    alignItems: 'center',
    padding: 16
  },

  ContentContainer: {
    paddingTop: 32,
    flex: 1
  }
})

export { AppStyles }