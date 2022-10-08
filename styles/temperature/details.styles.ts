import { StyleSheet } from 'react-native';
import { AppColors } from '../../styles/AppColors';

export const TemperatureDetailsStyles = StyleSheet.create({
  TemperatureDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  ContainterDetails: {
    backgroundColor: AppColors.Black1,
    borderRadius: 100,
    padding: 4
  },

  InformationDetail: {
    fontSize: 14,
    color: AppColors.MainWhite,
    marginLeft: 8,
    marginRight: 8,
    fontFamily: 'Poppins'
  }
})