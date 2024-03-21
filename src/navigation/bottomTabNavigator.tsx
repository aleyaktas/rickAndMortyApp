import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StyleProp, TextStyle} from 'react-native';
import Icon from '../components/atoms/Icon';
import colors from '../themes/colors';
import Home from '../screens/Home';
import Favorites from '../screens/Favorites';
import {InitialStateProps} from '../store/features/user/types';

export interface StateProps {
  user: InitialStateProps;
}

export default (props: any) => {
  const BottomTab = createBottomTabNavigator();
  const insets = useSafeAreaInsets();

  const fontFamilyStyle: StyleProp<TextStyle> = {
    fontFamily: 'Fredoka',
    letterSpacing: 1.2,
    color: colors.primary,
    fontWeight: '500',
  };

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: () => null,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.blackOlive,

        tabBarLabelStyle: {fontSize: 13},
        tabBarStyle: {
          height: 63 + insets.bottom,
          shadowColor: colors.dimGray,
          shadowRadius: 7,
          shadowOpacity: 0.13,
          shadowOffset: {width: 0, height: 0},
          borderTopWidth: 0,
        },
        tabBarItemStyle: {paddingVertical: 9},
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabelStyle: fontFamilyStyle,
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'Home' : 'HomeOutline'}
              width="24"
              height="24"
              color={colors.primary}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabelStyle: fontFamilyStyle,
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'Favorites' : 'FavoritesOutline'}
              width="24"
              height="24"
              color={colors.primary}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
