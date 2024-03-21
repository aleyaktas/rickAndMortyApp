import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../Header';
import style from './styles';
import colors from '../../../themes/colors';
import Icon from '../Icon';
import {ButtonProps, StyleProps} from './types';

export default ({
  children,
  onPress,
  textSize = 16,
  color,
  textColor = colors.white.default,
  iconName,
  iconWidth = 16,
  iconHeight = 16,
  iconColor = colors.white.default,
  disabled,
  shadow,
  border,
  fontFamily,
  borderColor,
  borderRadius = 17,
  medium,
  semiBold,
  bold,
  vertical,
  ...props
}: ButtonProps) => {
  const styles: StyleProps = style({border, borderColor, borderRadius});

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.9}
      style={[
        styles.button,
        border && styles.border,
        props.style,
        shadow && styles.shadow,
      ]}>
      {iconName && (
        <Icon
          name={iconName}
          width={iconWidth}
          height={iconHeight}
          color={iconColor}
        />
      )}
      {children && (
        <Header
          medium={medium}
          semiBold={semiBold}
          bold={bold}
          text={children}
          size={textSize}
          color={textColor}
          style={[
            iconName ? styles.textMargin : undefined,
            styles.text,
            {fontFamily},
          ]}
        />
      )}
      <View style={[styles.button, styles.linear, {overflow: 'hidden'}]}>
        <LinearGradient
          start={vertical ? {x: 0, y: 1} : {x: 1, y: 0}}
          end={{x: 0, y: 0}}
          style={[styles.linear]}
          colors={typeof color == 'object' ? color : [color, color]}
        />
      </View>
    </TouchableOpacity>
  );
};
