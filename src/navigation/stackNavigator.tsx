import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StackNavigatorList} from './types';
import EpisodeDetails from '../screens/EpisodeDetails';
import CharacterDetails from '../screens/CharacterDetails';
import bottomTabNavigator from './bottomTabNavigator';

export default () => {
  const Stack = createStackNavigator<StackNavigatorList>();

  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="BottomTab" component={bottomTabNavigator} />
      <Stack.Screen name="EpisodeDetails" component={EpisodeDetails} />
      <Stack.Screen name="CharacterDetails" component={CharacterDetails} />
    </Stack.Navigator>
  );
};
