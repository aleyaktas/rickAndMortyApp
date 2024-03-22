//Local Icons
import React from 'react';
import {SvgProps, SvgXml} from 'react-native-svg';
import colors from './colors';
import {I18nManager} from 'react-native';
import Home from '../assets/icons/home.svg';
import HomeOutline from '../assets/icons/home-outline.svg';
import ToastSuccess from '../assets/icons/toastSuccess.svg';
import ToastError from '../assets/icons/toastError.svg';
import User from '../assets/icons/user.svg';
import UserOutline from '../assets/icons/user-outline.svg';
import Favorites from '../assets/icons/favorites.svg';
import FavoritesOutline from '../assets/icons/favorites-outline.svg';
import Film from '../assets/icons/film.svg';
import Episode from '../assets/icons/episode.svg';

const icons: {[key: string]: React.FC<SvgProps>} = {
  Home,
  HomeOutline,
  ToastSuccess,
  ToastError,
  User,
  UserOutline,
  Favorites,
  FavoritesOutline,
  Film,
  Episode,
};

const nonFlip: {[key: string]: string} = {};

interface iconProps {
  name: string;
  color: string;
  width?: string | number;
  height?: string | number;
}

export default ({
  name,
  color,
  width = '24',
  height = '24',
  ...props
}: iconProps) => {
  if (color == undefined) {
    color = colors.quickSilver;
  }

  const Icon = icons[name];
  return (
    <SvgXml
      width={width}
      height={height}
      xml={Icon.toString()}
      color={color}
      style={{
        transform: [
          {scaleX: nonFlip[name] == undefined && I18nManager.isRTL ? -1 : 1},
        ],
      }}
      {...props}
    />
  );
};
