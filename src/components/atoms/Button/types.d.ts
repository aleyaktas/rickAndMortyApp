import {StyleProp, ViewStyle} from 'react-native';

export interface ButtonProps extends Partial<StyleFnProps> {
  children?: string;
  onPress?(): void;
  textSize?: number;
  color: string | Array<string>;
  textColor?: string;
  iconName?: string;
  iconWidth?: number | string;
  iconHeight?: number | string;
  fontFamily?: string;
  iconColor?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle> | undefined;
  shadow?: boolean;
  medium?: boolean;
  semiBold?: boolean;
  bold?: boolean;
  vertical?: boolean;
}

export interface StyleProps {
  container: object;
  button: object;
  text: object;
  textMargin: StyleProp<ViewStyle> | undefined;
  linear: object;
  shadow: object;
  border: StyleProp<ViewStyle> | undefined;
}

export interface StyleFnProps {
  border: boolean;
  borderColor: string;
  borderRadius: number;
}
