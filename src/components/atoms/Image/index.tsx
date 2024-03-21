import React from 'react';
import {View} from 'react-native';
import style from './styles';
import FastImage from 'react-native-fast-image';
import {ImageProps, StyleProps} from './types';

export default ({
  width,
  height,
  flex,
  aspectRatio,
  resizeMode,
  border,
  source,
  url,
  containerStyle,
  ...props
}: ImageProps) => {
  const styles: StyleProps = style({
    width,
    height,
    flex,
    resizeMode,
    aspectRatio,
  });

  return (
    <View style={[border && styles.border, styles.container, containerStyle]}>
      <FastImage
        style={[styles.image, props.style]}
        source={source ? source : {uri: url}}
      />
    </View>
  );
};
