import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import colors from '../../../themes/colors';
import Header from '../Header';
import Icon from '../Icon';
import style from './styles';
import {StyleProps, TextInputProps} from './types';

export default ({
  onChange,
  placeholder,
  placeholderTextColor = colors.placeholderTextColor,
  iconName,
  numberOfLine,
  multiline,
  autoFocus = false,
  iconWidth = '17',
  iconHeight = '17',
  fontSize = 15,
  onButtonPress,
  buttonIcon = '',
  maxLength = 25,
  buttonIconWidth = '17',
  buttonIconHeight = '17',
  iconColor = colors.primary,
  iconPosition = 'right',
  initialValue,
  backgroundColor = colors.ghostWhite,
  activeBackgroundColor = colors.white.default,
  containerStyle,
  value,
  editable,
  autoCorrect,
  keyboardType,
  secureTextEntry,
}: TextInputProps) => {
  const styles: StyleProps = style({
    backgroundColor,
    fontSize,
    activeBackgroundColor,
  });
  const [focused, setFocused] = useState(false);

  return (
    <View
      style={
        focused
          ? [styles.fContainer, containerStyle]
          : [styles.container, containerStyle]
      }>
      {iconName && iconPosition == 'left' && (
        <Icon
          name={iconName}
          width={iconWidth}
          height={iconHeight}
          color={iconColor}
        />
      )}
      <View style={styles.leftContainer}>
        {initialValue && <Header text={initialValue} size={fontSize} />}
        {initialValue && (
          <View style={focused ? styles.fSeperator : styles.seperator} />
        )}
        <TextInput
          textAlignVertical="center"
          secureTextEntry={secureTextEntry}
          autoCorrect={autoCorrect}
          keyboardType={keyboardType}
          multiline={multiline}
          editable={editable}
          style={styles.input}
          maxLength={maxLength}
          numberOfLines={numberOfLine}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          value={value && value}
          onChangeText={onChange}
          autoFocus={autoFocus}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </View>
      {iconName && iconPosition == 'right' && (
        <Icon
          name={iconName}
          width={iconWidth}
          height={iconHeight}
          color={iconColor}
        />
      )}
      {typeof onButtonPress != 'undefined' && (
        <TouchableOpacity onPress={onButtonPress}>
          <Icon
            name={buttonIcon}
            width={buttonIconWidth}
            height={buttonIconHeight}
            color={iconColor}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
