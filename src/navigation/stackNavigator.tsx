import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StackNavigatorList} from './types';
import EpisodeDetails from '../screens/EpisodeDetails';
import CharacterDetails from '../screens/CharacterDetails';
import bottomTabNavigator from './bottomTabNavigator';
import colors from '../themes/colors';

export default () => {
  const Stack = createStackNavigator<StackNavigatorList>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTab"
        component={bottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EpisodeDetails"
        options={{
          headerTitle: 'Episode Details',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTitleStyle: {
            fontFamily: 'Fredoka',
            letterSpacing: 1.2,
            color: colors.white.default,
            fontWeight: '600',
          },
          headerTintColor: colors.white.default,
        }}
        children={props => (
          <EpisodeDetails {...props} episodeId={props.route.params.episodeId} />
        )}
      />
      <Stack.Screen name="CharacterDetails" component={CharacterDetails} />
    </Stack.Navigator>
  );
};
