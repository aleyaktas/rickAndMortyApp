import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface InfoCardProps {
  label: string;
  text: string;
}

export interface StyleProps {
  infoCard: StyleProp<ViewStyle>;
  text: StyleProp<TextStyle>;
}
