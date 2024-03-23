import React from 'react';
import {Text} from 'react-native';
import style from './styles';
import colors from '../../../themes/colors';
import {HeaderProps} from './types';

export default ({
  text,
  center,
  top,
  bottom,
  onPress,
  size,
  color = colors.jacarta,
  start,
  medium,
  bold,
  heavy,
  semiBold,
  overLine,
  underLine,
  family = 'Fredoka',
  numberOfLines,
  ellipsizeMode,
  ...props
}: HeaderProps) => {
  const styles = style({
    size,
    color,
    start,
    medium,
    bold,
    semiBold,
    heavy,
    family,
    overLine,
    underLine,
  });

  return (
    <Text
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      onPress={onPress}
      allowFontScaling={false}
      style={[
        styles.header,
        props.style,
        center && {
          textAlign: 'center',
          textAlignVertical: center
            ? 'center'
            : top
            ? 'top'
            : bottom
            ? 'bottom'
            : undefined,
        },
      ]}>
      {text}
    </Text>
  );
};
