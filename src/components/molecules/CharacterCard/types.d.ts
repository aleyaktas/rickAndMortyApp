import {ImageStyle, StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface CharacterCardProps {
  characterData: ICharacter;
}

export interface StyleProps {
  card: StyleProp<ViewStyle>;
  details: StyleProp<ViewStyle>;
  title: StyleProp<TextStyle>;
  subtitle: StyleProp<TextStyle>;
  image: StyleProp<ImageStyle>;
  statusContainer: StyleProp<ViewStyle>;
  statusIndicator: StyleProp<ViewStyle>;
  footer: StyleProp<ViewStyle>;
}
