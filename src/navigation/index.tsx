import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import colors from '../themes/colors';
import StackNavigator from './stackNavigator';
import Toast from '../components/molecules/Toast';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import store, {persistor} from '../store';

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.white.default,
  },
};

export default () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer theme={Theme}>
            <StackNavigator />
            <Toast />
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};
