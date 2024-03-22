import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export type StackNavigatorList = {
  BottomTab: undefined;
  EpisodeDetails: {episodeId: number};
  CharacterDetails: undefined;
};

export type BottomNavigatorList = {
  Home: undefined;
  Favorites: undefined;
};

export type ScreenProp = StackNavigationProp<StackNavigatorList> &
  BottomTabNavigationProp<BottomNavigatorList>;
