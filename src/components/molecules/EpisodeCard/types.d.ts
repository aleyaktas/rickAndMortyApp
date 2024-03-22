import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface StyleProps {
  card: StyleProp<ViewStyle>;
  title: StyleProp<TextStyle>;
  subtitle: StyleProp<TextStyle>;
  footer: StyleProp<ViewStyle>;
}
