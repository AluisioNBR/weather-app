import React from 'react';
import { View, Text } from 'react-native';

import * as Animatable from 'react-native-animatable'
import { LinearGradient } from 'expo-linear-gradient';

import { AnimatedLoadingStyles } from '../styles/AnimatedLoading.styles';
import { AppColors } from '../styles/AppColors';

export function AnimatedLoading(){
  return (
    <View style={AnimatedLoadingStyles.AnimationBaseContainer}>
      <Text style={AnimatedLoadingStyles.AnimationLoadingTitle}>
        Carregando...
      </Text>

      <LoadingBar />
    </View>
  )
}

function LoadingBar() {
  const rotate = {
    from: {
      transform: [{ rotate: `${0}deg` }],
    },
    to: {
      transform: [{ rotate: `${360}deg` }],
    },
  }
  return (
    <Animatable.View
      animation={rotate} iterationCount={Infinity}
      duration={1000} style={{ padding: 32 }}
    >
      <LinearGradient
        colors={[AppColors.Gray2, AppColors.Black2]}
        style={AnimatedLoadingStyles.AnimationGradient}
      >
        <View style={AnimatedLoadingStyles.AnimationSpaceCenter}></View>
      </LinearGradient>
    </Animatable.View>
  )
}