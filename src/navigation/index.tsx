import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import colors from '../themes/colors';
import StackNavigator from './stackNavigator';
import Toast from '../components/molecules/Toast';

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.white.default,
  },
};

export default () => {
  return (
    <NavigationContainer theme={Theme}>
      <StackNavigator />
      <Toast />
    </NavigationContainer>
  );
};
