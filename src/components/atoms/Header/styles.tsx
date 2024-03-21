import {Platform} from 'react-native';
import {StyleFnProps, StyleProps} from './types';

export default ({
  size,
  color,
  start,
  medium,
  bold,
  heavy,
  semiBold,
  family,
  overLine,
  underLine,
}: StyleFnProps): StyleProps => {
  return {
    header: {
      fontSize: size,
      color: color,
      letterSpacing: 1.4,
      fontFamily: semiBold
        ? family + '-SemiBold'
        : heavy
        ? family + '-Heavy'
        : medium
        ? family + '-Medium'
        : bold
        ? family + '-Bold'
        : family + '-Regular',
      alignSelf: start ? 'flex-start' : undefined,
      fontWeight:
        Platform.OS == 'ios' || 'android'
          ? medium
            ? '500'
            : bold
            ? '700'
            : '400'
          : undefined,
      textDecorationLine: underLine
        ? 'underline'
        : overLine
        ? 'line-through'
        : undefined,
    },
  };
};
