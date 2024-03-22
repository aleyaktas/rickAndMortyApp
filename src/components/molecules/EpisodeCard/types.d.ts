import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface StyleProps {
  card: StyleProp<ViewStyle>;
  title: StyleProp<TextStyle>;
  subtitle: StyleProp<TextStyle>;
  footer: StyleProp<ViewStyle>;
}

export interface EpisodeData {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}
