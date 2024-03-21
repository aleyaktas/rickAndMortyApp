import {KeyboardType, StyleProp, ViewStyle} from 'react-native';

export interface StyleProps {
  container: object;
  fContainer: object;
  seperator: object;
  fSeperator: object;
  leftContainer: object;
  input: object;
  icon: object;
}

export interface StyleFnProps {
  backgroundColor?: string;
  activeBackgroundColor?: string;
  fontSize?: number;
}

export interface TextInputProps extends StyleFnProps {
  onChange?(text: string): any;
  placeholder: string;
  placeholderTextColor?: string;
  iconName?: string;
  iconWidth?: string;
  iconHeight?: string;
  multiline?: boolean;
  numberOfLine?: number;
  onButtonPress?(): void;
  maxLength?: number;
  buttonIcon?: string;
  buttonIconWidth?: string;
  autoFocus?: boolean;
  buttonIconHeight?: string;
  iconColor?: string;
  iconPosition?: string;
  initialValue?: string;
  containerStyle?: StyleProp<ViewStyle>;
  value?: string;
  editable?: boolean;
  autoCorrect?: boolean;
  keyboardType?: KeyboardType;
  secureTextEntry?: boolean;
}
