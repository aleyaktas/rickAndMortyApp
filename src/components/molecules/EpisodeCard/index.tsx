import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from '../../atoms/Icon';
import style from './styles';
import {Episode} from '../../../services/api/types';
import {useNavigation} from '@react-navigation/native';
import {ScreenProp} from '../../../navigation/types';

const EpisodeCard = ({episodeData}: {episodeData: Episode}) => {
  const styles = style();
  const navigation = useNavigation<ScreenProp>();

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.7}
      onPress={() => {
        navigation.navigate('EpisodeDetails', {
          episodeId: episodeData.id,
        });
      }}>
      <Text style={styles.title}>{episodeData?.episode}</Text>
      <Text style={styles.subtitle} numberOfLines={1} ellipsizeMode="tail">
        {episodeData?.name}
      </Text>
      <View style={styles.footer}>
        <Icon name="Episode" width={20} height={20} color="black" />
        <Text>{episodeData?.air_date}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default EpisodeCard;
