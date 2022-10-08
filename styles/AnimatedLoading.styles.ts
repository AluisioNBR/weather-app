import { StyleSheet } from "react-native";
import { AppColors } from './AppColors';

const AnimatedLoadingStyles = StyleSheet.create({
  AnimationBaseContainer: {
    flex: 1,
    backgroundColor: AppColors.MainBlack,
    alignItems: 'center',
    justifyContent: 'center'
  },

  AnimationLoadingTitle: {
    position: 'absolute',
    zIndex: 3,
    color: AppColors.MainWhite,
    fontWeight: 'bold',
    fontSize: 30
  },

  AnimationGradient: {
    width: 220,
    height: 220,
    borderRadius: 200,

    alignItems: 'center',
    justifyContent: 'center'
  },

  AnimationSpaceCenter: {
    width: 200,
    height: 200,
    borderRadius: 200,

    backgroundColor: AppColors.MainBlack,
    
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export { AnimatedLoadingStyles }