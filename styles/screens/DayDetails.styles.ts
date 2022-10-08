import { StyleSheet } from 'react-native'
import { AppColors } from '../AppColors';

export const DayDetailsStyles = StyleSheet.create({
	External: {
		backgroundColor: AppColors.MainBlack,
		
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},

	Container: {
		alignItems: 'center'
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
  },

	InformationsDate: {
		color: AppColors.MainWhite,
		fontSize: 32,
		textAlign: 'center',
		fontFamily: 'Poppins'
	},

	InformationsDescriptionContainer: {
		margin: 2,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center'
	},

	InformationsDescriptionText: {
		color: AppColors.MainWhite,
		fontSize: 26,
		textAlign: 'center',
		fontFamily: 'Poppins'
	},

	InformationsMinMaxContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly'
	},

	InformationsMinMaxText: {
		color: AppColors.MainWhite,
		fontSize: 20,
		textAlign: 'center',
		fontFamily: 'Poppins'
	},

	InformationByDayInstantsContainer: {
		marginRight: 12,
		marginLeft: 12
	},

	InformationDayInstant: {
		color: AppColors.MainWhite,
		fontSize: 20,
		fontFamily: 'Poppins'
	},

	DayTempByInstant: {
		color: AppColors.MainWhite,
		fontSize: 18,
		textAlign: 'center',
		fontFamily: 'Poppins'
	},

	DayFeelsLikeByInstant: {
		color: AppColors.Gray1,
		fontSize: 16,
		textAlign: 'center',
		fontFamily: 'Poppins'
	}
})