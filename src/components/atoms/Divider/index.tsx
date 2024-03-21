import React from 'react';
import {View} from 'react-native';
import dividerStyle from './styles';
import colors from '../../../themes/colors';
import {DividerProps} from './types';

export default ({
  top,
  bottom,
  vertical,
  color = colors.border,
  type = 'solid',
  width = '100%',
  weight = 1,
  style,
}: DividerProps) => {
  const styles = dividerStyle({
    top,
    bottom,
    vertical,
    color,
    type,
    width,
    weight,
  });

  return (
    <View style={[styles.container, style]}>
      <View style={styles.divider} />
    </View>
  );
};
